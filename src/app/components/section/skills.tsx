"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { RevolvingIcons } from "../ui/RevolvingIcons";
import { Stack } from "../assets/data";
import { SkillInfo } from "../assets/info";

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const skillInfo = Stack.map((item) => ({
    skill_name: item.skill_name,
    skill_detail: item.skill_detail,
    skill_icon: item.skill_icon,
    skill_proficiency: item.proficiency_level || 0, // Default to 0% if not specified
  }));
  // const handleIconClick = (index) => {
  //   setActiveIndex(index);
  // };
  return (
    <div>
      <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Skills and Technologies
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-700 to-white/50 mx-auto mb-6 md:mb-8"></div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-6 min-h-screen"
        >
          {/* Central Circle */}
          <div className="w-40 h-40 bg-transparent rounded-full shadow-3xl flex items-center justify-center z-10 relative mx-auto mb-8 md:mb-0">
            <div className="w-full h-full absolute inset-0 flex items-center justify-center">
              {skillInfo[activeIndex]?.skill_icon}
            </div>

            {/* Revolving Icons Container */}
            <div>
              <RevolvingIcons
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <SkillInfo skillInfo={skillInfo} activeIndex={activeIndex} />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
