import type { Metadata } from "next";
import Link from "tristanjockel/components/link";
import { H2, H3, Text, Title } from "tristanjockel/components/text";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tristan Jodsalz - /now: Current Projects",
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
            Last updated: {new Date("2026-01-07").toLocaleDateString()}
          </Text>
        </header>
        <Text>
          This page lists projects and things I am working on and ideas of
          projects I would like to do.
        </Text>

        <H2>Software Projects:</H2>

        <H3>Archivum</H3>
        <Text>
          <Link href="https://github.com/archivum-drive">Archivum Drive</Link>{" "}
          will be a selfhosted, end-to-end encrypted cloud storage solution. It
          uses CRDTs like events to sync end-to-end encrypted metadata between
          clients and stores its data in an content addressable, fully encrypted
          blob store.
        </Text>
        <Text>
          The project is devided into the{" "}
          <Link href="https://github.com/archivum-drive/archivum-core">
            core
          </Link>
          , which contains the logic and is protable to use with any frontend.
          Currently there are bindings for{" "}
          <Link href="https://github.com/archivum-drive/archivum-typescript">
            Typescript
          </Link>
          . With the help of the typescript bindings, I am building a{" "}
          <Link href="https://archivum-drive.github.io/archivum-frontend-web">
            web frontend
          </Link>
          .
        </Text>
        <Text>
          I have plans to add server-side indexing capabilities with projects
          like Confidential Containers to allow fully private search.
        </Text>

        <H3>Diarium</H3>
        <Text>
          Diarium is still in the planning phase. It will be a selfhosted,
          end-to-end encrypted diary/journal application with a focus on
          searchablility and statistics. It will not only store normal text but
          also things like public transport journeys or checkins at restaurants
          or hotels.
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
        <Text>
          vpsDUS also runs a recursive DNS resolver for internal use. It
          supports dns64 to use with a jool nat64 instance running on vpsAMS.
        </Text>
      </article>
    </main>
  );
}
