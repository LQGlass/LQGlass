import styles from "./Hero.module.scss";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade variant="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {/*         <img
          className="image1 d-block w-100"
          src="./images/slider/slideprueba.jpg"
          alt="Primer imagen"
        /> */}
        <picture>
          <source
            srcset="https://via.placeholder.com/400"
            media="(max-width: 500px)"
          />
          <source
            srcset="./images/slider/slide3.jpg"
            media="(max-width: 1000px)"
          />
          <img
            className="d-block w-100"
            src="./images/slider/slideAnimation1.gif"
            alt="example"
          />
        </picture>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <picture>
          <source
            srcset="https://via.placeholder.com/400"
            media="(max-width: 500px)"
          />
          <img
            className="d-block w-100"
            src="./images/slider/slideAnimation2.gif"
            alt="example"
          />
        </picture>
      </Carousel.Item>
      <Carousel.Item>
        <picture>
          <source
            srcset="https://via.placeholder.com/400"
            media="(max-width: 500px)"
          />
          <img
            className="d-block w-100"
            src="./images/slider/slideAnimation3.gif"
            alt="example"
          />
        </picture>
      </Carousel.Item>
      <Carousel.Item>
        <picture>
          <source
            srcset="https://via.placeholder.com/400"
            media="(max-width: 500px)"
          />
          <img
            className="d-block w-100"
            src="./images/slider/slideAnimation4.gif"
            alt="example"
          />
        </picture>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
