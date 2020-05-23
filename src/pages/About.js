import React from "react";

const svg = [
  {
    id: 1,
    title: "Css",
    image: "https://i.ya-webdesign.com/images/css-3-logo-png-7.png",
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
    image: "https://ya-webdesign.com/transparent250_/html5-drawing-9.png",
  },
  {
    id: 5,
    title: "React",
    image: "https://ya-webdesign.com/transparent250_/svg-js-animation-4.png",
  },
  {
    id: 6,
    title: "Node",
    image:
      "https://ya-webdesign.com/transparent250_/vector-javascript-node-js-4.png",
  },
  {
    id: 7,
    title: "Express",
    image:
      "https://www.sohamkamani.com/static/65137ed3c844d05124dcfdab28263c21/6b427/express-routing-logo.png",
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
    image: "https://blog.hoehne.ch/wp-content/uploads/2016/08/JWT-1280x720.png",
  },
  {
    id: 9,
    title: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb.svg",
  },
];

const About = () => {
  return (
    <div
      id="about"
      style={{
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "60vw" }}>
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
        <div style={{ paddingTop: "20px" }} className="container">
          <div className="row">
            {svg.map((one) => (
              <div
                key={one.id}
                className="col-md-2 col-5"
                style={{ padding: "0 5px" }}
              >
                <img
                  style={{ maxHeight: "50px" }}
                  src={one.image}
                  alt={one.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
