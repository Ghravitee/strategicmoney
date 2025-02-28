import React from "react";
import { motion } from "framer-motion";
import bgImage from "../src/assets/more-glitch.jpg";
import { FaXTwitter } from "react-icons/fa6";
import pump from "../src/assets/pump-2.png";

const App = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-8 text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Main Title with Glitch Effect */}
      <motion.h1
        className="glitch glitch-font text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl p-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Strategic Money Glitch
      </motion.h1>
      {/* Twitter Icon & Pump Image */}
      <motion.div
        className="flex flex-wrap gap-6 sm:gap-12 justify-center items-center mt-4"
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
            <FaXTwitter className="text-white text-4xl sm:text-5xl" />
          </motion.div>
        </a>

        <motion.img
          src={pump}
          alt="pump"
          width={50}
          height={50}
          className="neon-glow"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      </motion.div>

      <h2
        className="lato text-white text-5xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-8 mt-8"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        About <span className="glitch glitch-font">$SMG</span>
      </h2>
      {/* Description with Staggered Animation */}
      <motion.p
        className="text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-8 lato mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        A revolutionary Solana token tax system that evolves with your market
        cap, rewarding diamond hands and building sustainable growth.
      </motion.p>

      <motion.h3
        className=" text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-8 lato"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Tax: 8% Tax will be applied for rewards and CEX.
      </motion.h3>
    </div>
  );
};

export default App;
