import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../ExampleCarouselImage';
import styles from './Images.module.css'

  function Images() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className={styles.container}>
        <Carousel.Item className={styles.item}>
          <ExampleCarouselImage text='first slide' src = "https://th.bing.com/th/id/OIP.7m7vpIK0G_MbmqDa3mvZjwHaFS?pid=ImgDet&rs=1" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" src = 'https://th.bing.com/th/id/R.ee6eefa482b41bf31b9aa0dade6bd98f?rik=0MLliqSAKrO30A&pid=ImgRaw&r=0' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" src = 'https://jooinn.com/images/school-building-1.jpg' />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default Images;
