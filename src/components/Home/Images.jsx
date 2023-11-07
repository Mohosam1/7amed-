  import { useState } from 'react';
  import { useInView } from 'react-intersection-observer';
  import { motion, useAnimation } from 'framer-motion';
  import styles from './Images.module.css';

  const Images = () => {
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
    });

    const controls = useAnimation();

    const images = [
      {
        src: 'https://www.freepik.com/free-photos-vectors/school',
        alt: 'School Image 1',
      },
      {
        src: 'https://lifetouch.com/',
        alt: 'School Image 2',
      },
      {
        src: 'https://unsplash.com/s/photos/school',
        alt: 'School Image 3',
      },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
      setActiveIndex((nextIndex) => (nextIndex === images.length - 1 ? 0 : prevIndex + 1));
    };


    const variants = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 50 },
    };

    const transition = {
      duration: 0.5,
      ease: 'easeOut',
    };

    return (
      <div className={styles.container} ref={ref}>
        <div className={styles.carousel}>
          <button className={styles.prevButton} onClick={handlePrevClick}>
            Prev
          </button>
          <button className={styles.nextButton} onClick={handleNextClick}>
            Next
          </button>
          {images.map((image, index) => (
            <motion.img
              key={index}
              className={`${styles.image} ${index === activeIndex ? styles.active : ''}`}
              src={image.src}
              alt={image.alt}
              aria-label={image.alt}
              variants={variants}
              initial={index === 0 ? 'visible' : 'hidden'}
              animate={index === activeIndex ? 'visible' : 'hidden'}
              transition={transition}
            />
          ))}
        </div>
      </div>
    );
  };

  export default Images;
