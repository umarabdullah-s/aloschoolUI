import React from 'react'
import styles from './HeroSection.module.css'
import img from "@/assets/homepage/herosection/group.jpg"
import img1 from "@/assets/homepage/herosection/bg.jpg"

const HeroSection = () => {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>
            Meet the Power of <br />
            Design & <span>Technology</span>
          </p>
        </div>
        <div className={styles.image}>
          <img src={img.src} alt="students" />

          <div className={styles.placement}>
            <h3>100%</h3>
            <p>
              Placement <br /> Assistance
            </p>
          </div>

          <div className={styles.students}>
            <h3>500+</h3>
            <p>
              Number of students <br /> trusted
            </p>
          </div>
          <div className={styles.circle}>
            <div className={styles.dot}></div>
            <div className={styles.btn}>More about ALO</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection