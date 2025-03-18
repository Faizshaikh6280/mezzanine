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
        <title>Mezzanine Equity Private LTD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        <meta
          name="description"
          content="For over 2 years, Mezzanine Equity has backed brilliant businesses,
          serving as a trusted partner in transforming ambition into market
          leadership."
        />
        <meta name="keywords" content="mezzanine, equity, pre-ipo, finance" />
        <meta name="author" content="Mezzanine Equity Private LTD" />

        {/* Mobile Responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.mezzanineequity.co.in/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mezzanineequity.co.in/" />
        <meta property="og:title" content="Your Page Title | Brand Name" />
        <meta
          property="og:description"
          content="For over 2 years, Mezzanine Equity has backed brilliant businesses,
          serving as a trusted partner in transforming ambition into market
          leadership."
        />

        {/* Twitter Card */}
        <meta name="twitter:url" content="https://www.mezzanineequity.co.in/" />
        <meta name="twitter:title" content="Mezzanine Equity Private LTD" />
        <meta
          name="twitter:description"
          content="For over 2 years, Mezzanine Equity has backed brilliant businesses,
          serving as a trusted partner in transforming ambition into market
          leadership."
        />

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
