"use client";

import Head from "next/head";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Mezzanine Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/lenis@1.1.21/dist/lenis.css"
        />
      </Head>

      <main>
        <Hero />
        <Stats />
        <About />
      </main>
    </>
  );
}
