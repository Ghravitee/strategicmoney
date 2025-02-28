import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
// import pump from "../src/assets/pump-2.png";
import dex from "../src/assets/dex-2.png";
import { FaRegCopy } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";

const App = () => {
  // const [hasCopied, setHasCopied] = useState(false);

  // const handleCopy = () => {
  //   navigator.clipboard.writeText("0x000000000000000000000000000000");
  //   setHasCopied(true);

  //   setTimeout(() => {
  //     setHasCopied(false);
  //   }, 2000);
  // };
  return (
    <div className="flex flex-col justify-center bg-cover bg-center px-8 text-center py-10">
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

        <a href="">
          <motion.img
            src={dex}
            alt="dexscreener"
            width={50}
            height={50}
            className="neon-glow"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </a>
      </motion.div>

      {/* <div
        onClick={handleCopy}
        className="rounded-xl flex justify-center gap-2 items-center py-8 px-6 w-full sm:w-fit cursor-pointer mx-auto mt-10"
      >
        {hasCopied ? (
          <h2 className="text-white font-bold text-xl sm:text-2xl">Copied!</h2>
        ) : (
          <h2 className="text-xl lg:text-2xl text-white font-bold break-all pro">
            0x00000000000000000000000000000000000
          </h2>
        )}

        <div>
          {hasCopied ? (
            <FaCopy className="text-2xl sm:text-3xl text-white" />
          ) : (
            <FaRegCopy className="text-2xl sm:text-3xl text-white" />
          )}
        </div>
      </div> */}

      <h2
        className="glitch glitch-font text-white text-5xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-8 my-8"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        $SMG
      </h2>
      {/* Description with Staggered Animation */}
      <div className="bg-black p-8 max-w-[50rem]">
        <motion.p
          className="text-white text-left text-xl sm:text-2xl md:text-3xl lg:text-3xl px-2 sm:px-4 quantico lowercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          a revolutionary solana token tax system that evolves with your market
          cap, rewarding diamond hands and building sustainable growth.
        </motion.p>
      </div>

      <div className="px-6 py-8 bg-black rounded-xl mt-8">
        <h3 className=" text-white text-xl sm:text-2xl md:text-3xl lg:text-2xl quantico lowercase">
          Tax: 8% Tax will be applied for rewards.
        </h3>
      </div>
    </div>
  );
};

export default App;
