"use client";

import { teamMembers } from "@/data";
import useClickOutside from "@/hooks/useClickOutside";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { RxCrossCircled } from "react-icons/rx";
import Image from "next/image";

function OurTeam() {
  const [selectedMember, setSelectedMember] = React.useState(null);
  const modalRef = useClickOutside(() => setSelectedMember(null));
  return (
    <div className="our-team">
      <motion.h1
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="gradient-text text-8xl font-bold text-center"
      >
        Meet The Team
      </motion.h1>

      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-card"
            onClick={() => {
              setSelectedMember(member);
              console.log("clicked");

              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="team-image w-[400px] h-[400px] relative overflow-hidden rounded-lg">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="social-links">
              {member.socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="__blank"
                  className="social-link"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && <div className="team-modal-overlay"></div>}
      <div
        ref={modalRef}
        className={`team-modal ${selectedMember ? "open" : ""}`}
      >
        {selectedMember && (
          <>
            <div className="team-modal-content">
              <button
                className="close-modal"
                onClick={() => {
                  setSelectedMember(null);
                }}
              >
                <RxCrossCircled size={40} />
              </button>

              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                width={100}
                height={100}
              />

              <div className="team-info">
                <h3>{selectedMember.name}</h3>
                <h4>{selectedMember.role}</h4>
              </div>

              <div className="bio-information">
                {selectedMember.paras.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OurTeam;
