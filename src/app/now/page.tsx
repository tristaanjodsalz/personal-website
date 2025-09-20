import type { Metadata } from "next";
import Link from "tristanjockel/components/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tristan Jockel - /now: Current Projects",
    description: "A non exaustive list of things I am working on.",
  } satisfies Metadata;
}

export default async function NowPage() {
  return (
    <main>
      <article>
        <header className="mb-6">
          <h1 className="font-bold text-4xl">What I am working on</h1>
          <p className="mb-2 text-current/60 italic">
            Last updated: {new Date("2025-09-20").toLocaleDateString()}
          </p>
        </header>
        <p className="mb-2">
          This page lists projects and things I am working on and ideas of
          projects I would like to do.
        </p>

        <h2 className="mt-8 border-b border-b-current/20 pb-2 font-semibold text-3xl tracking-tight">
          Software Projects:
        </h2>

        <h3 className="mt-4 scroll-m-20 font-semibold text-2xl tracking-tight">
          Software Modem
        </h3>
        <p className="mb-2">
          <Link href="https://github.com/Minecrafter5K/software-modem">
            Software Modem
          </Link>{" "}
          is a Rust implementation of an OFDM modulator and demodulator. I am
          planning on building a phased array tranciver to transmit and receive
          data with help of this library.
        </p>

        <h3 className="mt-4 scroll-m-20 font-semibold text-2xl tracking-tight">
          Archivum
        </h3>
        <p className="mb-2">
          <Link href="https://github.com/archivum-drive">Archivum Drive</Link>{" "}
          will be a selfhosted, end-to-end encrypted cloud storage solution. It
          uses CRDTs to sync end to end encrypted metadata between clients and
          stores files fully encrypted on a server.
        </p>
        <p className="mb-2">
          I have plans to add server side indexing capabilities with projects
          like Confidential Containers to allow fully private search.
        </p>

        <h2 className="mt-8 scroll-m-20 border-b border-b-current/20 pb-2 font-semibold text-3xl tracking-tight">
          Other Projects:
        </h2>

        <h3 className="mt-4 scroll-m-20 font-semibold text-2xl tracking-normal">
          AS207792
        </h3>
        <p className="mb-2">
          After reading a lot about BGP, routing in general and hobbynets I
          decided to get my own ASN. With the help of iFog i registerd{" "}
          <Link href="https://www.peeringdb.com/net/39427">AS207792</Link> and
          got a /46 IPv6 allocation.
          <br />
          With two VPSes (one in Amsterdam and one in Düsseldorf) running bird2
          I connect to my Upstreams iFog (AS34927) and First Root (AS41108).
          <br />
          Also I have a port at{" "}
          <Link href="https://fogixp.org/">FogIXP Europe</Link>.
        </p>
        <p className="mb-1">
          The VPS in Düsseldorf also runs a private VPN server for my devices to
          connect to.
        </p>
      </article>
    </main>
  );
}
