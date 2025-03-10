"use client";

import { portfolioLinkks } from "@/data";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// export function generateStaticParams() {
//   return portfolioLinkks.map((portfolio) => ({
//     companyname: portfolio.slug, // Must match the dynamic route [service]
//   }));
// }

function PortfolioPage({ params }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Staggers each child
    },
  };
  const paraVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  if (!params) return null; // Ensure params exist before using it

  const portfolio = portfolioLinkks.find((s, index) => {
    if (s.slug === params.com) {
      imageNum = index;
    }
    return s.slug === params.companyname;
  });

  if (!portfolio) {
    return notFound(); // Show 404 if service not found
  }

  return (
    <div className="portfolio-page">
      <div className="flex justify-center">
        <img
          className="logo"
          src={portfolio.logoblack ? portfolio.logoblack : portfolio.logo}
          alt={portfolio.title}
        />
      </div>

      <motion.h1
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=" text-8xl font-bold text-center"
      >
        {portfolio.title}
      </motion.h1>
      <div className="text-center">
        <motion.h3
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-bold">Sector:</span> {portfolio.sector}
        </motion.h3>
      </div>

      <div className="portfolio-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="portfolio-description"
        >
          {portfolio.paras.map((para, index) => (
            <motion.p variants={paraVariants} key={index} className="text-lg">
              {para}
            </motion.p>
          ))}
        </motion.div>
        {portfolio.website && (
          <div className="text-center">
            <Link
              href={portfolio.website}
              target="__blank"
              className="portfolio-website"
            >
              Visit : {portfolio.website}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default PortfolioPage;
