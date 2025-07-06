"use client";
import { CardContainer, CardBody, CardItem } from "../assets/cards";
import { TypewriterEffect } from "../ui/TypewriterEffect";
import { motion } from "framer-motion";

type Project = {
  id?: string;
  project_name?: string;
  project_detail?: string;
  project_image?: string;
};

type Skill = {
  // id?: string;
  skill_name?: string;
  skill_detail?: string;
  skill_icon?: React.ReactNode | string;
  skill_proficiency: number;
};

type ProjectInfoProps = {
  projectInfo: Project[];
  activeIndex: number;
};

type SkillInfoProps = {
  skillInfo: Skill[];
  activeIndex: number;
};

export const ProjectInfo = ({projectInfo, activeIndex }: ProjectInfoProps) => {
  const active_description = projectInfo?.[activeIndex] || {
    id: "",
    project_name: "",
    project_detail: "",
    project_image: "",
  };
  return (
    <div className="p-3">
      <div className="project-header font-bold text-lg sm:text-xl mb-2 text-white truncate">
        {active_description?.project_name?.toUpperCase() || "NO NAME AVAILABLE"}
      </div>
      <div className="project-body p-stack text-neutral-300 text-base sm:text-lg">
        {active_description?.project_detail || "No Detail Available"}
      </div>
    </div>
  );
};

export const SkillInfo = ({ skillInfo, activeIndex }: SkillInfoProps) => {
  const active_description = skillInfo?.[activeIndex] || {
    skill_name: "",
    skill_detail: "",
    skill_icon: "",
    skill_proficiency: 0,
  };
  return (
    <div>
      <CardContainer className="rounded-lg border border-gray-700 w-full max-w-full sm:max-w-2xl mx-auto">
        <CardBody className="bg-gray-950/50 backdrop-blur-sm relative hover:shadow-2xl hover:shadow-blue-500/[0.1] border-white/[0.2] w-full h-auto rounded-xl p-4 sm:p-6 border transition-all duration-300">
          <CardItem className="flex flex-row items-center gap-2 sm:gap-4 mb-4 w-full text-lg sm:text-2xl font-bold text-white">
            <div className="w-10 flex items-center justify-center text-2xl">
              {active_description?.skill_icon || "🔧"}
            </div>
            <div className="">
              {active_description?.skill_name
                ? active_description.skill_name.toUpperCase()
                : "NO NAME AVAILABLE"}
            </div>
          </CardItem>
          <CardItem className="text-neutral-300 text-base sm:text-lg w-full mt-2">
            <TypewriterEffect
              words={[
                {
                  text: active_description?.skill_detail
                    ? active_description.skill_detail
                    : "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
              ]}
            />
          </CardItem>
          <CardItem className="w-full mt-20">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Proficiency level</h3>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-3 bg-gradient-to-r from-blue-700 to-white/50 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${active_description.skill_proficiency}%` }}
                transition={{ duration: 3, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
            <span className="text-sm text-gray-400 text-center">
              {active_description?.skill_proficiency || 0}%
            </span>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};
