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
    <Carousel fade
    controls={false}
      activeIndex={index}
      onSelect={handleSelect}
      className={styles.carousel}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/slider/slide1.png"
          alt="Primer imagen"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/slider/slide2.png"
          alt="Segunda imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/slider/slide3.jpg"
          alt="Tercera imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/slider/slide4.png"
          alt="Cuarta imagen"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
