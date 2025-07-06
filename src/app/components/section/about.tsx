"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 px-2 sm:px-4 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            About Me
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-700 to-white/50 mx-auto mb-6 md:mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-white/50 rounded-lg transform rotate-6 w-5/6 h-full hidden md:block"></div>
              <Image
                src="/images/me.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="relative rounded-lg shadow-2xl w-full max-w-[280px] sm:max-w-xs md:max-w-full mx-auto"
                priority
              />
            </div>
          </motion.div>

          <motion.div className="space-y-5 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Passionate about creating digital experiences
            </h3>
            <p className="text-white leading-relaxed">
              I&apos;m a frontend developer with 5+ years of experience building
              modern web applications. I specialize in React, TypeScript, and
              Next.js, with a keen eye for design and user experience.
            </p>
            <p className="text-white leading-relaxed">
              When I&apos;m not coding, you can find me exploring new
              technologies especially generative AI, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>
            <p className="text-white leading-relaxed">
              I thrive in collaborative environments, where I can leverage my
              creativity and problem-solving abilities to bring projects to
              life. Let&apos;s build something amazing together!
            </p>

            {/* <div className="flex flex-wrap justify-center md:justify-start space-x-4 pt-2">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors mb-2"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors mb-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:your@email.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors mb-2"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
