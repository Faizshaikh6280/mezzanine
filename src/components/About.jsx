import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Delay between child animations
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section className="about flex" id="aboutus">
      <div className="blur-effect"></div>
      <motion.div
        className="left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Adjust when animation starts
      >
        <motion.p variants={paragraphVariants}>
          Driving growth takes more than capital, it demands vision, strategy,
          and precise execution. That’s why, at Mezzanine Equity Private
          Limited, we work closely with companies, offering strategic guidance
          to position them for long-term expansion and market leadership.
        </motion.p>

        <motion.p variants={paragraphVariants}>
          Headquartered in Ahmedabad, we are a boutique IPO advisory firm that
          guides company promoters through every stage of the process, from
          pre-IPO preparation/stage to a successful listing and beyond
        </motion.p>

        <motion.p variants={paragraphVariants}>
          Our expertise spans advising in capital raising , regulatory
          compliance, documentation, business structuring, and strategic liaison
          with BSE and NSE exchanges. Through close collaboration with
          investment bankers, auditors, and legal advisors, we provide tailored
          solutions that support each client’s long-term vision and ensure a
          smooth, efficient, and successful transition to public markets.
        </motion.p>
      </motion.div>

      <div className="right">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 variants={paragraphVariants}>Our Philosophy</motion.h2>
          <motion.p variants={paragraphVariants}>
            Collaboration is at the heart of what we do, and at the core of
            every investment we make is our belief in the power of great
            partnerships. By integrating financial expertise with regulatory
            foresight and market intelligence, we provide businesses with the
            clarity they need to move forward with confidence. We bridge funding
            gaps to accelerate growth and create lasting value for investors.
            Our philosophy is built on trust, transparency, and an unwavering
            focus on delivering excellence, helping businesses unlock their full
            potential in an ever-evolving financial landscape.
          </motion.p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 variants={paragraphVariants}>Our Approach</motion.h2>
          <motion.p variants={paragraphVariants}>
            We identify businesses with strong growth potential and help them
            unlock their next phase of expansion. Engaging in thoughtful Capital
            Structuring by advising on pre-IPO funding and private placements,
            we align capital needs with long-term objectives.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            We support companies at every stage, from early preparation to a
            smooth and successful listing. Our approach ensures well-planned
            exits that create value for all stakeholders.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            We work hand-in-hand with company promoters, ensuring clarity,
            confidence, and momentum throughout the process.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
