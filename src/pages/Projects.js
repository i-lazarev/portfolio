import React from "react";
import CustomizedDialogs from "../components/CustomizedDialogs";
import { Animated } from "react-animated-css";
const Projects = () => {
  return (
    <div
      id="projects"
      style={{
        scrollBehavior: "smooth",
        height: "101vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated 
      animationIn="zoomIn" 
      animationOut="zoomOut" 
      isVisible={true}
      animationInDelay="3000">
      
        <CustomizedDialogs />
      </Animated>
    </div>
  );
};

export default Projects;
