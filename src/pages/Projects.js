import React from "react";
import DialogYummy from "../components/DialogYummy";
import { Animated } from "react-animated-css";
import DialogTodo from "../components/DialogTodo";
import DialogTicTacToe from "../components/DialogTicTacToe";

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
      <Animated
        style={{ cursor: "pointer" }}
        animationIn="zoomIn"
        animationOut="zoomOut"
        isVisible={true}
        animationInDelay="3000"
      >
        <DialogTicTacToe />
      </Animated>
    </div>
  );
};

export default Projects;
