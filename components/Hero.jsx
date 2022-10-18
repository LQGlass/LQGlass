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
          src="./images/Slide1.png"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/Slide2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/Slide3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        
    )
}

export default Hero;