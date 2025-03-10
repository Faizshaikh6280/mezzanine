"use client";

import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { motion } from "framer-motion";
import { IoPaperPlane } from "react-icons/io5";

function ContactUs() {
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
          <div className="flex items-center justify-between">
            <FaLocationDot className="icon" />
            <h3>01</h3>
          </div>

          <h2>Our Address</h2>
          <p>
            C-44, Pushpam Bunglows, Kharawala Compound, Vatva Road, Isanpur,
            Ahmedabad-382443, Gujarat, India
          </p>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <MdSupportAgent className="icon" size={60} />
            <h3>02</h3>
          </div>

          <h2>Contact Info</h2>
          <p>+91-886-687-3523</p>
          <p>mezzanineequity@gmail.com</p>
        </div>
      </div>

      <div className="form-container">
        <h2>Send us a Message</h2>

        <form>
          <input type="text" placeholder="Your Name*" required />
          <input type="number" placeholder="Phone" />
          <input type="email" placeholder="Your Email*" required />
          <input type="text" placeholder="Subject*" required />
          <textarea placeholder="Your Message*" rows={5} required></textarea>
          <button type="submit">
            Send <IoPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
