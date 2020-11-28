import React from "react";
import DialogYummy from "../components/DialogYummy";
import { Animated } from "react-animated-css";
import DialogTodo from "../components/DialogTodo";
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
        paddingBottom: "10%",
      }}
    >
      <Animated
        style={{ cursor: "pointer" }}
        animationIn="zoomIn"
        animationOut="zoomOut"
        isVisible={true}
        animationInDelay="3000"
      >
        <DialogYummy />
      </Animated>
      <Animated
        style={{ cursor: "pointer" }}
        animationIn="zoomIn"
        animationOut="zoomOut"
        isVisible={true}
        animationInDelay="3000"
      >
        <DialogTodo />
      </Animated>
    </div>
  );
};

export default Projects;
