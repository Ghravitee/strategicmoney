import React from "react";
import { motion } from "framer-motion";
import bgImage from "../src/assets/dark glitch.webp";
import { FaXTwitter } from "react-icons/fa6";
import pump from "../src/assets/pump-2.png";

const App = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Main Title with Glitch Effect */}
      <motion.h17
        className="glitch text-white text-7xl p-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Strategic Money Glitch
      </motion.h17>

      {/* Twitter Icon & Pump Image */}
      <motion.div
        className="flex gap-12 justify-center items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a href="https://x.com/Smg__solana">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="neon-glow"
          >
            <FaXTwitter className="text-white text-5xl" />
          </motion.div>
        </a>

        <motion.img
          src={pump}
          alt="pump"
          width={60}
          height={60}
          className="neon-glow"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      </motion.div>

      {/* Description with Staggered Animation */}
      <motion.h2
        className="glitch text-white text-6xl text-center px-8 jeju mt-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        $SMG is a Solana token reward system, rewarding holders with SOL and
        USDC.
      </motion.h2>

      <motion.h3
        className="glitch text-white text-4xl text-center mt-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Tax: 8% Tax will be applied for rewards and CEX.
      </motion.h3>
    </div>
  );
};

export default App;
