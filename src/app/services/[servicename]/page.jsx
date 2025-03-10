"use client";

import { serviceslinks } from "@/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

// export function generateStaticParams() {
//   return serviceslinks.map((service) => ({
//     servicename: service.id, // Must match the dynamic route [service]
//   }));
// }

export default function ServicePage({ params }) {
  if (!params) return null; // Ensure params exist before using it
  let imageNum;

  const service = serviceslinks.find((s, index) => {
    if (s.id === params.servicename) {
      imageNum = index;
    }
    return s.id === params.servicename;
  });

  if (!service) {
    return notFound(); // Show 404 if service not found
  }

  return (
    <div className="service px-[20rem] py-[3rem]">
      <motion.h1
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="gradient-text"
      >
        {service.heading}
      </motion.h1>
      <p>{service.description}</p>

      <div className="image-container ">
        <Image
          src={`/images/service-${imageNum + 1}.${
            imageNum + 1 < 4 ? "avif" : "jpg"
          }`}
          alt="Service Image"
          fill // Makes the image take full container size
          style={{ objectFit: "contain", objectPosition: "center" }} // Ensures full image visibility
        />
      </div>

      <div className="service-list">
        <div className="blur-effect"></div>

        {service.services.map((s, index) => (
          <div key={index} className="service-item flex gap-4">
            <h2 className="text-4xl">{index + 1}</h2>
            <div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
