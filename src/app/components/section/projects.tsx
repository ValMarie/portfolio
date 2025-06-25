"use client";

import { useState } from "react";
import ImageSlider from "../ui/Slider";
import { motion } from "framer-motion";
import { ProjectInfo } from "../assets/info";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projectInfo = [
    {
      id: 1,
      project_name: "html 5",
      detail:
        "Starting of my programming carrer with HTM was both fun an tasking but the challenge was worthwhile",
      project_image: "/images/me.jpg",
    },
    {
      id: 2,
      project_name: "css 3",
      detail: "This is css 3",
      project_image: "/images/me.jpg",
    },
    {
      id: 3,
      project_name: "javascript",
      detail: "This is javascript",
      project_image: "/images/me.jpg",
    },
    {
      id: 4,
      project_name: "jquery",
      detail: "This is jquery",
      project_image: "/images/me.jpg",
    },
  ];

  // Create images array for ImageSlider
  const projectImages = projectInfo.map((project) => ({
    src: project.project_image,
    alt: project.project_name,
    key: project.id,
  }));

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-white/50 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-12 my-5 "
        >
          <div className="my-5 ">
            <ImageSlider
              images={projectImages}
              setActiveIndex={setActiveIndex}
            />
          </div>
          <div className="p-5">
            <ProjectInfo info={projectInfo} activeIndex={activeIndex} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
