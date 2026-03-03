
import React, { useRef, useState, useEffect } from "react";
import styles from "./ourstory.module.css";
import Founder from "../ourFounder/Founder";
import History from "../ourHistory/History";
import Team from "../ourTeam/Team";

const OurStory = () => {
  const scrollRef = useRef(null);
  const historyRef = useRef(null);
  const founderRef = useRef(null);
  const teamRef = useRef(null);

  const [active, setActive] = useState("history");
  
  
  useEffect(() => {
    const sections = [historyRef, founderRef, teamRef];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.showSection);
            setActive(entry.target.id);
          } else {
            entry.target.classList.remove(styles.showSection);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.5, 
      },
    );

    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);


const scrollToSection = (ref) => {
  const container = scrollRef.current;
  const section = ref.current;

  if (!container || !section) return;

  const scrollTop = section.offsetTop - container.offsetTop;

  container.scrollTo({
    top: scrollTop,
    behavior: "smooth",
  });
};

  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftPanel}>
          <p
            className={active === "history" ? styles.active : ""}
            onClick={() => scrollToSection(historyRef)}
          >
            History
          </p>

          <p
            className={active === "founder" ? styles.active : ""}
            onClick={() => scrollToSection(founderRef)}
          >
            Meet Our Founder
          </p>

          <p
            className={active === "team" ? styles.active : ""}
            onClick={() => scrollToSection(teamRef)}
          >
            Our Team
          </p>

          <p>Our Philosophy</p>
        </div>

        <div className={styles.rightPanel}>
          <p className={styles.title}>
            Our <span>Story</span>
          </p>

          <div className={styles.scrollContent} ref={scrollRef}>
            <section id="history" ref={historyRef}>
              <History />
            </section>

            <section id="founder" ref={founderRef}>
              <Founder />
            </section>

            <section id="team" ref={teamRef}>
              <Team />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
