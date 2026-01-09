import Link from "tristanjockel/components/link";
import { Code, H2, H3, InlineCode, Text } from "tristanjockel/components/text";

export const meta = {
  slug: "ssh-with-sso",
  title: "How I use SSH with SSO",
  date: "2025-10-19",
  description:
    "I have set up step ca to issue SSH certificates to my clients using SSO with keycloak so I can use sigle sign-on from all my devices to SSH into my servers.",
};

export default function SSHWithSSO() {
  const sshCertificateTemplate = `{
  "type": {{ toJson .Type }},
  "keyId": {{ toJson .KeyID }},
  "principals": {{ toJson ((concat .Principals ((splitList " " (default "" .Token.ssh_principals)) | compact)) | uniq) }},
  "extensions": {{ toJson .Extensions }},
  "criticalOptions": {{ toJson .CriticalOptions }}
}`;

  return (
    <div>
      <section>
        <Text>
          A while ago I watched a video about WPA3 Enterprise authentication
          with EAP-TLS. It mentioned step ca, a certificate authority that can
          issue X.509 and SSH certificates. As I find certificates and public
          key authentication generally interesting, I read a few of their
          (actually very good){" "}
          <Link href="https://smallstep.com/blog/">blog articles</Link>
          .
          <br />
          One article described how to authenticate to SSH servers using SSO. I
          think this concept is really interesting and as I thought about
          setting up a CA for mTLS client certificate authentication anyway, I
          tried it out.
        </Text>
      </section>
      <section>
        <H2>Setup</H2>
        <Text>
          The initial setup of step ca is quite simple. You can follow their{" "}
          <Link href="https://smallstep.com/docs/step-ca/getting-started/">
            getting started guide
          </Link>{" "}
          and{" "}
          <Link href="https://smallstep.com/docs/step-ca/certificate-authority-server-production/#operational-concerns">
            production guide
          </Link>
          . You need to pass the <InlineCode>--ssh</InlineCode> flag to enable
          SSH certificates and the <InlineCode>--remote-management</InlineCode>{" "}
          flag to allow for remote management via the cli.
        </Text>
        <Text>
          To issue a certificate, step ca uses "provisioners". These are
          different methods to authenticate clients. Webservers may use{" "}
          <Link href="https://de.wikipedia.org/wiki/Automatic_Certificate_Management_Environment">
            ACME
          </Link>{" "}
          and we will use the{" "}
          <Link href="https://smallstep.com/docs/step-ca/provisioners/#oauthoidc-single-sign-on">
            OIDC provisioner
          </Link>
          . <br />I already had a Keycloak instance running for SSO, so I
          created a new client for step ca. The default configuration is mostly
          enough; you just need to add the valid redirect URI{" "}
          <InlineCode>http://127.0.0.1</InlineCode>
          and enable{" "}
          <span className="italic">OAuth 2.0 Device Authorization Grant</span>{" "}
          if you want to provision a certificate from a machine without a
          browser.
        </Text>
        <Text>
          After creating the client, you can create the OIDC provisioner:
          <Code>
            step ca provisioner add keycloak --type oidc \<br />
            --client-id step-ca --client-secret YOUR_CLIENT_SECRET \
            <br />
            --configuration-endpoint
            https://YOUR_KEYCLOAK_DOMAIN/realms/YOUR_REALM/.well-known/openid-configuration
          </Code>
        </Text>
        <H3>Custom SSH Principals</H3>
        <Text>
          By default, step ca will use your email and the part before the @ as
          SSH principals. <br />
          So for <InlineCode>example@bekanntefreunde.de</InlineCode> you would
          be able to use the certificate to authenticate as{" "}
          <InlineCode>exmaple</InlineCode> or
          <InlineCode>example@bekanntefreunde.de</InlineCode>.
        </Text>
        <Text>
          While this is fine for most use cases, I usually have a dot in my
          email address but not in my Unix username. <br />
          But as you can customize user attributes in Keycloak, I just added a
          new <InlineCode>ssh_principals</InlineCode> attribute to my realm.
        </Text>
        <Text>
          To do this, you need to go to the{" "}
          <span className="font-bold italic">Realm settings</span> and add an
          attribute under the{" "}
          <span className="font-bold italic">User profile</span> tab. You
          probably want to make this attribute only editable by admins, as this
          gives the user permission to log into your servers as arbitrary Unix
          users.
          <br />
          To make this attribute available in the OpenID token, you need to add
          a new Client scope. Go to{" "}
          <span className="font-bold italic">Client scopes</span> and create a
          new scope, e.g. <InlineCode>ssh_principals</InlineCode>. Also switch
          the <span className="font-bold italic">Include in token scope</span>{" "}
          toggle on.
          <br />
          Next you need to add a mapper to the scope to link it to the user's
          attribute. This can be done in the{" "}
          <span className="font-bold italic">Mappers</span> tab. Create a mapper
          by configuration and choose{" "}
          <span className="font-bold italic">User Attribute</span> as mapper
          type.
          <br />
          Chose a name and select your <InlineCode>ssh_principals</InlineCode>{" "}
          attribute the <span className="italic">User attribute</span> dropdown.
        </Text>
        <Text>
          Finally you just need to add the new client scope to your step ca
          client (
          <span className="italic">
            Client {">"} step-ca {">"} Client scopes {">"} Add client scope
          </span>
          ) and tell step ca to use it:
          <Code>
            step ca provisioner update keycloak --scope oidc --scope email
            --scope ssh_principals
          </Code>
          Then, you need to create a template for SSH certificates that uses the
          new attribute:
          <Code>{sshCertificateTemplate}</Code>
          This is the same as the default template, only the principals line is
          modified to include the new attribute split by spaces and merged with
          the default principals (e.g. email and username).
        </Text>
        <Text>
          Update the provisioner to use the new template:
          <Code>
            step ca provisioner update keycloak --ssh-template ./cert.tpl
          </Code>
        </Text>

        {/* add the step ssh configure command somehow */}

        <H3>Setup of SSH hosts</H3>
        <Text>I will add this later, I promise :)</Text>
      </section>
      <section>
        <H2>Ok, but how does it work?</H2>
        <Text>
          Because the CA knows which servers have an active host certificate
          (you can actually check that with{" "}
          <InlineCode>step ssh hosts</InlineCode>) SSH checks if the host you
          are SSHing into has said certificate.
          <br />
          If so, a step proxy command is invoked, which ensures there is a valid
          SSH certificate in the SSH agent. If not, it issues a new one with the
          configured provisioner. In this case it opens a browser with Keycloak.
          Keycloak authenticates you and redirects you to a local webserver from
          step.
          <br />
          Since{" "}
          <span className="italic">OAuth 2.0 Device Authorization Grant</span>{" "}
          is also enabled, it is also possible to authenticate to Keycloak with
          a key you input on another device/manually.
        </Text>
        <Text>
          The server also authenticates to the client with the host certificate.
          As this certificate is signed by our certificate authority, the client
          can check it with the following line in the{" "}
          <span className="italic">known_hosts</span> file:{" "}
          <InlineCode>@cert-authority * SOMEKEY</InlineCode>
        </Text>
        <Text>
          I think this method of authenticating to SSH servers is quite cool.
          <br />
          Previously I have used FIDO2 keys stored on my YubiKey, but now I
          don't necessarily have to touch/have it with me anymore.
          <br />
          If you think this is still not enough, there are still possibilities
          for further customization. As an article on{" "}
          <Link href="https://smallstep.com/blog/clever-uses-of-ssh-certificate-templates/">
            SSH Certificate Templates
          </Link>{" "}
          details, you can embed a ForceCommand, which limits access to only a
          specific shell/command, you can restrict SourceAddresses or limit x11
          forwarding, etc.
        </Text>
      </section>
      <Text>
        I hope this was helpful somehow!
        <br />
        See you in the next post! {"<3"}
      </Text>
    </div>
  );
}
