"use client";
import { portfolioLinkks } from "@/data";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <div className="portfolio">
      <motion.h1
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-8xl font-bold text-center gradient-text"
      >
        Portfolio Companies
      </motion.h1>

      <div className="investments">
        <div className="blur-effect"></div>
        <h2>All Investments</h2>
        {portfolioLinkks.map((portfolio, indx) => (
          <Link href={portfolio.link} className="investment-card" key={indx}>
            <Link className="gradient-text" href={portfolio.link}>
              {portfolio.title}
            </Link>
            {portfolio.slug !== "not-disclosed" && (
              <img src={portfolio.logo} alt={portfolio.title + "logo"} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
