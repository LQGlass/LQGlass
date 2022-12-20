import styles from "./Hero.module.scss";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = ()=>{
    return(
        
        <Carousel className={styles.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/slider/slide1.jpg"
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
          src="./images/slider/slide2.jpg"
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
          src="./images/slider/slide4.jpg"
          alt="Cuarta imagen"
        />
      </Carousel.Item>
    </Carousel>
        
    )
}

export default Hero;