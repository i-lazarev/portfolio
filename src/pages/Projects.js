import React from "react";
import CustomizedDialogs from "../components/CustomizedDialogs";
const Projects = () => {
  return (
    <div
      id="projects"
      style={{
        scrollBehavior:"smooth",
        height: "101vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <CustomizedDialogs/>
    </div>
  );
};

export default Projects;
