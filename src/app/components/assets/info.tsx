"use-client"



export const ProjectInfo = ({ info, activeIndex }) => {
  const active_description = info [activeIndex] || { id: "", project_name: "", detail: "", project_image: "" };


  return (
    <div className=" card drop-card p-3">
      <div className="card-header"> {active_description.project_name.toUpperCase() || "No Name Available"}</div>
      <div className="card-body p-stack">{active_description.detail || "No Detail Available"}</div>
    </div>
  );
};

