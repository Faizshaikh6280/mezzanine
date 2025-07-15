import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="stats-container flex">
      <motion.div
        className="left"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          For over 2 years, Mezzanine Equity has backed brilliant businesses,
          serving as a trusted partner in transforming ambition into market
          leadership.
        </p>
        <div className="stats-box flex">
          <div>
            <h2>02</h2>
            <p>Years Running</p>
          </div>

          <div>
            <h2>₹500 Cr+</h2>
            <p>Investment Raised</p>
          </div>
          <div>
            <h2>07</h2>
            <p>Companies Advised</p>
          </div>
        </div>
      </motion.div>
      <motion.img src="/images/img-1.png" alt="Image" />
    </section>
  );
}
