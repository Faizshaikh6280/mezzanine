"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Delay between child animations
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="hero-content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        transition={{ duration: 0.7 }} // Animation duration
        variants={itemVariants}
        className="gradient-text"
      >
        Your Partner In Financial Success
      </motion.h1>
      <motion.div
        transition={{ duration: 0.7 }} // Animation duration
        variants={itemVariants}
        className="btns flex"
      >
        <Link href="#aboutus" className="btn">
          Learn More
        </Link>
      </motion.div>
    </motion.div>
  );
}
