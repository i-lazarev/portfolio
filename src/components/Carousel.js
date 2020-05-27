import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";
import Img1 from "../images/zdenek-machacek-hgkjhbL5C1g-unsplash.jpg";
import Img2 from "../images/chmyphotography-qI5XixBb6TU-unsplash.jpg";
import Img3 from "../images/jack-b-JUvlf3OT6kc-unsplash.jpg";
import Img4 from "../images/joel-tasche-OWLvyW0YosY-unsplash.jpg";
import Img5 from "../images/jonas-off-pvYly2NeiCs-unsplash.jpg";
import Img6 from "../images/josep-pines-0QpAbH2i-Cs-unsplash.jpg";
import "../styles/Carousel.css"

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

const Carousel = () => {
  return (
    <MDBContainer
      style={{
        height: "70vh",
        width: "100vw"
      }}
    >
      <MDBCarousel
        activeItem={6}
        length={6}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          (
          {quotes.map((quote) => (
            <MDBCarouselItem key={quote.id} itemId={quote.id}>
              <MDBView>
                <img
                  style={{ height: "75vh", objectFit: "contain" }}
                  className="d-block w-100 kenburns-top"
                  src={quote.img}
                  alt=""
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">{quote.quote}</h3>
                <p>{quote.author}</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          ))}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Carousel;
