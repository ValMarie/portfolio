"use-client";
import { CardContainer, CardBody, CardItem } from "../assets/cards";

export const ProjectInfo = ({ projectInfo, activeIndex }) => {
  const active_description = projectInfo[activeIndex] || {
    id: "",
    project_name: "",
    project_detail: "",
    project_image: "",
  };
  return (
    <div className="p-3">
      <div className="project-header">
        {active_description.project_name.toUpperCase() || "No Name Available"}
      </div>
      <div className="project-body p-stack">
        {active_description.project_detail || "No Detail Available"}
      </div>
    </div>
  );
};

export const SkillInfo = ({ skillInfo, activeIndex }) => {
  const active_description = skillInfo[activeIndex] || {
    id: "",
    skill_name: "",
    skill_detail: "",
    skill_icon: "",
  };
  return (
      <CardContainer className=" rounded-lg border border-gray-700 text-center">
        <CardBody className="bg-gray-950/50 backdrop-blur-sm relative hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-screen sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            // translateZ="50"
            className="text-xl font-bold text-white"
          >
            <span className="text-3xl mr-3">
              {active_description.skill_icon || "🔧"}
            </span>
            <span className="">
              {active_description.skill_name || "No Name Available"}
            </span>
          </CardItem>
          <CardItem
            as="p"
            // translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 "
          >
            {active_description.skill_detail || "No Detail Available"}
          </CardItem>
        </CardBody>
      </CardContainer>
  );
};
