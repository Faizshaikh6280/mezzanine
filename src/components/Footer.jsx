import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import Image from "next/image";
import { LuCopyright } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer  left-0">
        <div className="col-1">
          <img alt="icon" src="/images/logo-white.svg" className="logo" />
          <div className="social-links">
            {[
              SlSocialFacebook,
              SlSocialInstagram,
              SlSocialLinkedin,
              FaXTwitter,
            ].map((Icon) => (
              <a key={Icon} href="#" className="shrink-0">
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        <div className="col-2">
          <h2>Quick Links</h2>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/our-team">Our Team</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/">Home</Link>
        </div>

        <div className="col-3">
          <h2>Contact Information</h2>

          <div>
            <span className="shrink-0">
              <SlLocationPin size={22} />
            </span>
            <p>
              C-44, Pushpam Bunglows, Kharawala Compound, Vatva Road, Isanpur,
              Ahmedabad-382443, Gujarat
            </p>
          </div>
          <div>
            <span className="shrink-0">
              <LuPhoneCall size={20} />
            </span>
            <p>+91-886-687-3523</p>
          </div>
          <div>
            <span className="shrink-0">
              <GoMail size={20} />
            </span>
            <p>mezzanineequity@gmail.com</p>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>
          <span className="inline-flex items-center gap-3">
            Copyright <LuCopyright size={20} />
          </span>{" "}
          <span>
            2025 by Mezzanine Equity Private Limited. All Rights Reserved.
          </span>
        </p>
        <p className="credit">
          Design & Developed By
          {/* <FaHeart size={25} className="icon" /> */}
          <Link
            href="https://www.linkedin.com/in/faiz-alam-8b5025226/"
            target="_blank"
          >
            Faiz Alam
          </Link>
        </p>
      </div>
    </>
  );
}
