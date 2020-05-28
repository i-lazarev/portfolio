import React from "react";
import Navbar from "../components/NavBar";
import CarouselComponent from "../components/Carousel";

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
      <CarouselComponent />
    </div>
  );
};

export default Home;
