import React from "react";
import Navbar from "../components/NavBar";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div
      id="home"
      style={{
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar/>
      <Carousel />
    </div>
  );
};

export default Home;
