"use client";
import Link from "next/link";
import ServiceModal from "./ServiceModal";
import { GoArrowRight } from "react-icons/go";
import { RiMenu3Line } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";

import React, { useEffect, useState } from "react";
import { navlinks, serviceData, serviceslinks } from "@/data";
import { motion } from "framer-motion";

export default function Header() {
  const [selectedPage, setSelectedPage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [selectedService, setSelectedService] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const service = serviceData[selectedService];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 760); // Adjust breakpoint as needed
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Staggers each child
    },
  };

  const listVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <header>
      <nav className="flex nav relative">
        <div className="light-effect">
          <img src="/images/light-bg-2.png" alt="Light effect" />
        </div>

        <Link href={"/"} onClick={() => setSelectedPage("")}>
          <img src="/images/logo-white.svg" alt="Mezzanine logo" />
        </Link>

        <ul className="flex nav__links">
          {navlinks.map((item, indx) => (
            <li key={indx} onClick={() => setSelectedPage(item.title)}>
              <Link
                href={item.link}
                className={selectedPage === item.title ? "active" : ""}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* if screen is mobile (less than 793px show this navbar) */}
        {isMobile && (
          <div className="menu ">
            <div
              className="hamburger__icon cursor-pointer"
              onClick={() => setMenuOpen(true)}
            >
              <RiMenu3Line size={30} />
            </div>
            <div className={`mobile__menu ${menuOpen ? "active" : ""}`}>
              <span className="icon" onClick={() => setMenuOpen(false)}>
                <RxCrossCircled size={40} />
              </span>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="mobile__menu__links flex flex-col gap-10 "
              >
                {navlinks.map((item, indx) => (
                  <motion.li
                    variants={listVariants}
                    key={indx}
                    onClick={() => setSelectedPage(item.title)}
                  >
                    <Link
                      onClick={() => setMenuOpen(false)}
                      href={item.link}
                      className={selectedPage === item.title ? "active" : ""}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        )}
      </nav>

      <ServiceModal
        isOpen={selectedPage === "Services"}
        onClose={() => setSelectedPage("")}
      >
        <div className="flex  gap-10 modal justify-between">
          <div className="left h-full rounded-2xl basis-full lg:basis-1/3">
            <div className="flex gap-4">
              <h2 className="font-bold text-4xl">What We Do</h2>
              <GoArrowRight size={30} />
            </div>

            <ul className="mt-12 ">
              {serviceslinks.map((service, index) => (
                <li
                  onClick={() => setSelectedPage("")}
                  key={index}
                  onMouseEnter={() => setSelectedService(index)}
                >
                  <Link href={`/services/${service.id}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {!isMobile && (
            <div className="right h-full basis-2/3  items-start">
              <h1 className="font-bold text-2xl">{service.heading}</h1>
              {service.description.map((para, indx) => (
                <p className="mt-4" key={indx}>
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      </ServiceModal>
    </header>
  );
}
