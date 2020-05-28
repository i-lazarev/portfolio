import React from "react";
import Img1 from "../images/architecture-blur-bridge-buildings-314380.jpg";
import Img2 from "../images/astronomy-beautiful-clouds-constellation-355465.jpg";
import Img3 from "../images/birds-5159711_1920.jpg";
import Img4 from "../images/light-painting-at-night-327509.jpg";
import Img5 from "../images/lights-night-weather-storm-66867.jpg";
import Img6 from "../images/person-holding-magnifying-glass-712786.jpg";
import "../styles/Carousel.css";
import { Animated } from "react-animated-css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const quotes = [
  {
    id: 1,
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
    img: Img1,
  },
  {
    id: 2,
    author: "Mark Twain",
    quote:
      "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    img: Img2,
  },
  {
    id: 3,
    author: "Mark Twain",
    quote:
      "Never put off till tomorrow what may be done day after tomorrow just as well.",
    img: Img3,
  },
  {
    id: 4,
    author: "John Wooden",
    quote: "Just do the best you can. No one can do more than that",
    img: Img4,
  },
  {
    id: 5,
    author: "Mahatma Gandhi",
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    img: Img5,
  },
  {
    id: 6,
    author: "Friedrich Nietzsche",
    quote: "That which does not kill us makes us stronger.",
    img: Img6,
  },
];

const CarouselComponent = () => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      interval="3500"
      stopOnHover={false}
      showIndicators={false}
      autoPlay
      infiniteLoop={true}
    >
      {quotes.map((quote) => (
        <div key={quote.id}>
          <img id="image-quote" src={quote.img} alt={quote.author} />
          <div className="legend" style={{ background: "transparent" }}>
            <p style={{ fontSize: "25px" }}>"{quote.quote}"</p>
            <p style={{ fontSize: "20px", textAlign: "end" }}>{quote.author}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
