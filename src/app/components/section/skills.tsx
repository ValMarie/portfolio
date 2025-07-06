"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {RevolvingIcons} from "../ui/RevolvingIcons";
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
          className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-6 min-h-screen"
        >
          {/* Central Circle */}
          <div className="w-40 h-40 bg-transparent rounded-full shadow-3xl flex items-center justify-center z-10 relative mx-auto mb-8 md:mb-0">
            <div className="text-white font-semibold text-sm absolute inset-0 flex items-center justify-center pointer-events-none">
              Center
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

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div> */}
      </section>
    </div>
  );
};

export default Skills;
