"use client";
import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useMouseEnter } from "./ui/useMouseEnter";
import About from "./about";
import Projects from "./projects";
import Achievements from "./achievements";

const Section = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section className="relative inset-0  ">
      {/* Animated Background */}
      <div className=" inset-0">
        <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
          <div className="absolute top-10 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-20 left-40 w-72 h-72 bg-white/50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-[1000]"></div>
          <div
            className="absolute top-80 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse "
            style={{ animationDelay: "2s" }}
          ></div>
        </motion.div>
      </div>

      <motion.div>
        {" "}
        <About />
      </motion.div>

      <motion.div className="">
        {" "}
        <Achievements />
      </motion.div>
      <motion.div className="">
        {" "}
        <Projects />
      </motion.div>
    </section>
  );
};

export default Section;
