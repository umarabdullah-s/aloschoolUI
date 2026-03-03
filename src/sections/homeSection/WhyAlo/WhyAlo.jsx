
import styles from './whyalo.module.css'
import img1 from "@/assets/homepage/whyalo/img1.jpg"
import img2 from "@/assets/homepage/whyalo/img2.png";
import img3 from "@/assets/homepage/whyalo/img3.png";
import React, { useEffect, useRef, useState } from "react";


const WhyAlo = () => {
  const sectionRef = useRef(null);
  const [showCards, setShowCards] = useState(false);
 useEffect(() => {
   const observer = new IntersectionObserver(
     ([entry]) => {
       setShowCards(entry.isIntersecting);
     },
     { threshold: 0.35 },
   );

   if (sectionRef.current) {
     observer.observe(sectionRef.current);
   }

   return () => observer.disconnect();
 }, []);


  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p className={styles.para}>
            Why Choose <br />
            Alo
          </p>
        </div>
        <div
          ref={sectionRef}
          className={`${styles.contents} ${showCards ? styles.showCards : ""}`}
        >
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img1.src} alt="img" />
            </div>
            <div className={styles.desc}>
              <p className={styles.title}>Experienced Professionals</p>
              <p className={styles.content}>
                Learn from Industry designers who provide practical knowledge,
                real insights, and career-focused mentorship.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img2.src} alt="img" />
            </div>
            <div className={styles.desc}>
              <p className={styles.title}>Real Time Experience</p>
              <p className={styles.content}>
                Build skills through live projects that give hands-on practice,
                clear insight, and the confidence to handle real-world tasks.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img3.src} alt="img" />
            </div>
            <div className={styles.desc}>
              <p className={styles.title}>Portfolio Building</p>
              <p className={styles.content}>
                Each project strengthens your portfolio by showcasing your
                complete design process and creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyAlo