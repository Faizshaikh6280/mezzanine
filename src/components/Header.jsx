"use client";
import Link from "next/link";
import ServiceModal from "./ServiceModal";
import { GoArrowRight } from "react-icons/go";
import { RiMenu3Line } from "react-icons/ri";

import React, { useEffect, useRef, useState } from "react";
import { navlinks, serviceslinks } from "@/data";
import gsap from "gsap";

const serviceData = [
  {
    heading:
      "Pre-IPO Advisory: Evaluating Readiness & Crafting a Strategic Path",
    description: [
      "For companies considering an IPO, we provide expert insights into feasibility and preparedness, ensuring a seamless transition to public markets.",
    ],
  },
  {
    heading: "Fundraising Strategy",
    description: [
      "•	Private Placement (Pre-IPO Equity Infusion)",
      "\n •	Anchor Investments for Public Offerings",
    ],
  },
  {
    heading: "Assistance in compliance and regulatory requirements",
    description: [
      "Listing on an exchange involves stringent compliance requirements. With our connections in legal and regulatory frameworks, we offer comprehensive advisory services",
    ],
  },
  {
    heading: "Underwriting & Pricing Advisory",
    description: [
      "Structuring underwriting and pricing to strengthen investor confidence, manage risk, and establish a competitive, market-aligned share price.",
    ],
  },
  {
    heading: "Guidance in Value unlocking",
    description: [
      "Assisting companies in unlocking value by optimizing their financial and operational efficiencies, ultimately enhancing profitability and shareholder returns.",
    ],
  },
];

export default function Header() {
  const [selectedPage, setSelectedPage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [selectedService, setSelectedService] = useState(0);
  const boxRef = useRef(null); // Create a reference for the element

  useEffect(() => {
    gsap.from(boxRef.current, {
      right: "-1rem",
    });
  }, []); // Runs only once after the component mounts

  const service = serviceData[selectedService];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header>
      <nav className="flex nav">
        <div className="light-effect">
          <img src="/images/light-bg.png" alt="Light effect" />
        </div>

        <Link href={"/"}>
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
          <div className="menu" ref={boxRef}>
            <div className="hamburger__icon cursor-pointer">
              <RiMenu3Line size={30} />
            </div>
            <div className="mobile__menu">
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
