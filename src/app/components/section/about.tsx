"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-white/50 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-white/50 rounded-lg transform rotate-6 w-5/6"></div>
              <Image
                src="/images/me.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Passionate about creating digital experiences
            </h3>
            <p className="text-white leading-relaxed">
              I&apos;m a frontend developer with 5+ years of experience building
              modern web applications. I specialize in React, TypeScript, and
              Next.js, with a keen eye for design and user experience.
            </p>
            <p className="text-white leading-relaxed">
              When &apos;m not coding, you can find me exploring new
              technologies especially generative AI, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>
            <p className="text-white leading-relaxed">
              I thrive in collaborative environments, where I can leverage my
              creativity and problem-solving abilities to bring projects to
              life. Let&apos;s build something amazing together!
            </p>

            {/* <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
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
