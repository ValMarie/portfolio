"use client";

import { useState } from "react";
import { CardStack } from "../../ui/CardStack";
import { CardGrid } from "../../ui/CardGrid";
import {Switch} from "../../ui/ToogleSwitch";

import { motion } from "framer-motion";
import { ProjectsData } from "../../assets/data";
import Image from "next/image";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGridView, setIsGridView] = useState(false);

  // CardStack and CardGrid expect id, name, detail, content
  const projectCards = ProjectsData.map((project) => ({
    id: project.id,
    name: project.project_name,
    detail: project.project_detail,
    content: (
      <Image
        src={project.project_image}
        alt={project.project_name}
        width={800}
        height={800}
        className="rounded-xl w-full h-full object-cover"
      />
    ),
  }));

  const toggleView = () => {
    setIsGridView((prev) => {
      console.log("toggleView -> switching to", !prev ? "grid" : "stack");
      return !prev;
    });
  };
  
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.div className="text-center mb-10 md:mb-16">

          <h1 className=" md:text-5xl text-4xl font-bold mb-4 md:mb-4">
            Featured Projects
          </h1>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-200 to-white/50 mx-auto mb-6 md:mb-8"></div>
          <button
            type="button"
            onClick={() => toggleView()}
            className="bg-blue-500 text-white py-2 px-4 rounded mb-4 z-30 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 pointer-events-auto"
            aria-pressed={isGridView}
          >
            {isGridView ? "Switch to Stack View" : "Switch to Grid View"}
          </button>
          {/* <Switch /> */}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        key={isGridView ? "grid-view" : "stack-view"}
        className="my-5 relative rounded-lg shadow-xl h-full w-full max-w-[280px] sm:max-w-xs md:max-w-full"
      >
        {isGridView ? (
          <CardGrid cards={projectCards} onActiveIndexChange={setActiveIndex} />
        ) : (
          <CardStack
            items={projectCards}
            offset={10}
            scaleFactor={0.06}
            onActiveIndexChange={setActiveIndex}
          />
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
