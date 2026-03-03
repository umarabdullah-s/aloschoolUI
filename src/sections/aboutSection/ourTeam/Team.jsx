
import React from "react";
import img1 from "@/assets/aboutpage/team1.png";
import img2 from "@/assets/aboutpage/imggg.jpeg";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./team.module.css";

const teamMembers = [
  {
    name: "Natarajan",
    role: "CEO & Founder ALO Groups",

    linkedin: "#",
  },
  {
    name: "Natarajan",
    role: "CEO & Founder ALO Groups",

    linkedin: "#",
  },
];

const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.formobile}>
          <p className={styles.mobileTitle}>
            Our<span>Team</span>
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img1.src} alt="" />
            </div>
            <div className={styles.intro}>
              <div className={styles.namedesg}>
                <p className={styles.name}>Esai Kumar P</p>
                <p className={styles.designation}>
                  Executive Director & Trustee
                </p>
              </div>
              <div className={styles.linkedin}>
                <a
                  href="https://www.linkedin.com/in/esai-kumar-38620a25b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinBox}
                >
                  <FaLinkedinIn className={styles.linkedinIcon} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img2.src} alt="" />
            </div>
            <div className={styles.intro}>
              <div className={styles.namedesg}>
                <p className={styles.name}>Ramya B</p>
                <p className={styles.designation}>Secretary</p>
              </div>
              <div className={styles.linkedin}>
                <a
                  href="https://www.linkedin.com/in/ramya-b-a452642a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinBox}
                >
                  <FaLinkedinIn className={styles.linkedinIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team; 
