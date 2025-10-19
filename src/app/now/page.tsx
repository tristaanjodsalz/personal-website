import type { Metadata } from "next";
import Link from "tristanjockel/components/link";
import { H2, H3, Text, Title } from "tristanjockel/components/text";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tristaan Jodsalz - /now: Current Projects",
    description:
      "A list of projects and things am working on. Archivum (an e2ee Drive Solution), AS207792, etc.",
  } satisfies Metadata;
}

export default async function NowPage() {
  return (
    <main>
      <article>
        <header className="mb-6">
          <Title>What I am working on</Title>
          <Text className="text-current/60 italic">
            Last updated: {new Date("2025-09-20").toLocaleDateString()}
          </Text>
        </header>
        <Text>
          This page lists projects and things I am working on and ideas of
          projects I would like to do.
        </Text>

        <H2>Software Projects:</H2>

        <H3>Software Modem</H3>
        <Text>
          <Link href="https://github.com/Minecrafter5K/software-modem">
            Software Modem
          </Link>{" "}
          is a Rust implementation of an OFDM modulator and demodulator. I am
          planning on building a phased array transceiver to transmit and
          receive data with the help of this library.
        </Text>

        <H3>Archivum</H3>
        <Text>
          <Link href="https://github.com/archivum-drive">Archivum Drive</Link>{" "}
          will be a selfhosted, end-to-end encrypted cloud storage solution. It
          uses CRDTs to sync end-to-end encrypted metadata between clients and
          stores files fully encrypted on a server.
        </Text>
        <Text>
          I have plans to add server-side indexing capabilities with projects
          like Confidential Containers to allow fully private search.
        </Text>

        <H2>Other Projects:</H2>

        <H3 className="!tracking-normal">AS207792</H3>
        <Text>
          After reading a lot about BGP, routing in general and hobbynets, I
          decided to get my own ASN. With the help of iFog, I registered{" "}
          <Link href="https://www.peeringdb.com/net/39427">AS207792</Link> and
          got a /46 IPv6 allocation.
          <br />
          With two VPSes (one in Amsterdam and one in Düsseldorf) running bird2,
          I connect to my upstreams iFog (AS34927) and First Root (AS41108).
          <br />
          Also I have a port at{" "}
          <Link href="https://fogixp.org/">FogIXP Europe</Link>.
        </Text>
        <Text>
          The VPS in Düsseldorf runs a private VPN server for my devices to
          connect to.
        </Text>
      </article>
    </main>
  );
}
