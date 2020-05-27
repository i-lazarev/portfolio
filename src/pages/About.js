import React from "react";
import "../styles/About.css";

const svg = [
  {
    id: 1,
    title: "Css",
    image: "https://cdn.iconscout.com/icon/free/png-256/css3-11-1175239.png",
  },
  {
    id: 2,
    title: "Bootstrap",
    image: "https://ya-webdesign.com/transparent250_/bootstrap-svg-3.png",
  },
  {
    id: 3,
    title: "Javascript",
    image:
      "https://ya-webdesign.com/transparent250_/svg-zooming-javascript-12.png",
  },
  {
    id: 4,
    title: "HTML",
    image: "https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png",
  },
  {
    id: 5,
    title: "React",
    image: "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png",
  },
  {
    id: 6,
    title: "Node",
    image: "https://cdn.iconscout.com/icon/free/png-256/node-js-1-1174935.png",
  },
  {
    id: 7,
    title: "Express",
    image: "https://cdn.iconscout.com/icon/free/png-256/express-8-1175029.png",
  },
  {
    id: 10,
    title: "SCSS",
    image:
      "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/057/full/scsslogo.png",
  },
  {
    id: 8,
    title: "Github",
    image: "https://ya-webdesign.com/transparent250_/github-icon-png-8.png",
  },

  {
    id: 11,
    title: "JWT",
    image: "https://jwt.io/img/pic_logo.svg",
  },
  {
    id: 9,
    title: "MongoDB",
    image: "https://img.icons8.com/color/344/mongodb.png",
  },
];

const About = () => {
  return (
    <div id="about">
      <div id="text-about">
        <p>
          I have a firm knowledge of HTML, CSS and JavaScript language and
          possess a good knowledge of computer software packages (frameworks and
          tools) that are used in today’s technology.
        </p>
        <p>
          On a personal level, I am highly-motivated, result oriented,
          self-driven, hard-working, fast learner and constantly seeking to
          improve my skills and am fully aware of the latest Front-end
          Development Tools.
        </p>
        <p>
          In addition to this, I have the ability to adapt to any type of team
          environment, I am team oriented and get along with others when working
          in a group setting. I also have the ability to work independently
          while staying on schedule and meeting those tight deadlines.
        </p>
        <p> Below is a list of my current technical skills:</p>
      </div>
      <div id="container">
        <div className="row">
          {svg.map((one) => (
            <div key={one.id} className="column">
              <img id="image" src={one.image} alt={one.title} />
              <p id="title">{one.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
