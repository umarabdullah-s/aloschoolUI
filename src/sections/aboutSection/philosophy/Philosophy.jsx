import React from "react";
import styles from "./philosophy.module.css";
import img from "@/assets/aboutpage/philosopy.jpeg";

const Philosophy = () => {
 return (
   <div className={styles.container}>
     <p className={styles.mobileTitle}>
       Our<span>History</span>
     </p>
     <div className={styles.image}>
       <img src={img.src} alt="img" />
     </div>
     <div className={styles.content}>
       <p>
         At ALO School of Design & Technology, we believe designing is best
         learned through practice, creativity, and real-world experience. Our
         approach focuses on hands-on learning, industry relevant skills, and
         continuous improvement. We encourage students to think independently,
         solve real problems, and grow with confidence in a supportive and
         collaborative environment. By combining practical training with modern
         tools and mentorship, we help learners to develop both strong technical
         ability and a professional mindset.
       </p>
       {/* <p>
         We observed that students coming out of college have no idea about
         Designing. To overcome this challenge and make the fresher’s better
         understanding of Designing basics to advance. ALO School have simulated
         the Atmosphere where students receive employee like experience. This
         Diploma Program trains students to handle UI/UX design work based on
         real industry standards and professional discipline.
       </p> */}
       
       {/* <p>
          Our curriculum bridges the gap between academics and industry through
          project-based learning and expert guidance. Students gain practical
          skills, confidence, and a professional mindset to succeed in modern
          design careers.
        </p> */}
     </div>
   </div>
 );
};

export default Philosophy;
