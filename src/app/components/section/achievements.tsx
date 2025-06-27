"use client";
import React from "react";
import { motion } from "framer-motion";
import RevolvingIcons from "../ui/RevolvingIcons";
import { SkillInfo } from "../assets/info";

const Skills = () => {
  const skills = [
    { name: "React", icon: "⚛️", level: 95 },
    { name: "TypeScript", icon: "📘", level: 90 },
    { name: "Next.js", icon: "▲", level: 88 },
    { name: "Tailwind CSS", icon: "🎨", level: 92 },
    { name: "Node.js", icon: "🟢", level: 85 },
  ];

  return (
    <div>
      <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-white/50 mx-auto mb-8"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-1gap-6 justify-center items-center"
        >
          <div>
            <RevolvingIcons />
          </div>

          <div>
            <SkillInfo skillInfo={skills} activeIndex={0} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-blue-700 to-white/50  h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {skill.level}% proficiency
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
