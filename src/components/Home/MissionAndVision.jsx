  import React from "react";
  import styles from "./MAV.module.css";
  import { useInView } from "react-intersection-observer";
  import { motion, useAnimation } from "framer-motion";

  const MissionAndVision = () => {
    const { ref, inView } = useInView();
    const containerAnimation = useAnimation();

    const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      },
    };

    React.useEffect(() => {
      if (inView) {
        containerAnimation.start("show");
      }
    }, [inView, containerAnimation]);

    return (
      <div className={styles.container} ref={ref}>
        <motion.p
          className={styles.head}
          variants={containerVariants}
          initial="hidden"
          animate={containerAnimation}
        >
          <div>Mission</div>
          <div>and</div>
          <div>Vision</div>
        </motion.p>
        <p className={styles.text}>
          A school's mission and vision statements are important for communicating
          the school's values and beliefs to the community. The mission statement
          explains what the school is currently doing to achieve its vision, while
          the vision statement speaks to the school's hopes and intentions for the
          future A clear mission and vision statement can create unity on campus
          by communicating to everyone involved what they are collectively
          aspiring to attain . To write a school mission and vision statement, it
          is important to gather stakeholders, including faculty, staff, and
          students, and involve them in the process . The statements should be
          concise, memorable, and easy to recall . The vision statement should
          provide a glimpse at the school's ideal future, while the mission
          statement should provide an overview of the steps planned to achieve
          that future . The statements should be visible to the entire community,
          including on the school's website, in the office, and in newsletters
        </p>
      </div>
    );
  };

  export default MissionAndVision;
