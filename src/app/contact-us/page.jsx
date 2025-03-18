"use client";

import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { motion } from "framer-motion";
import { IoPaperPlane } from "react-icons/io5";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-us">
      <motion.h1
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="gradient-text text-8xl text-center font-bold"
      >
        Contact Us
      </motion.h1>

      <div className="cards">
        <div className="blur-effect"></div>

        <div className="card">
          <div className="flex items-center gap-4">
            <FaLocationDot className="icon" />
            <h2>Our Address</h2>
          </div>

          <p>
            C-44, Pushpam Bunglows, Kharawala Compound, Vatva Road, Isanpur,
            Ahmedabad-382443, Gujarat, India
          </p>
        </div>
        <div className="card">
          <div className="flex items-center gap-4">
            <MdSupportAgent className="icon" size={60} />
            <h2>Contact Info</h2>
          </div>

          <p>+91-886-687-3523</p>
          <p>info@mezzanineequity.co.in</p>
        </div>
      </div>

      <div className="form-container">
        <h2>Send us a Message</h2>

        <form
          action={"https://formsubmit.co/info@mezzanineequity.co.in"}
          method="POST"
        >
          <input
            type="text"
            placeholder="Your Name*"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="hidden"
            name="_gotcha"
            style={{ display: "none !important" }}
          />
          <input
            type="text"
            placeholder="Phone"
            value={formData.phone}
            name="phone"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Your Email*"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Subject*"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            placeholder="Your Message*"
            rows={5}
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <button type="submit">
            Send <IoPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
