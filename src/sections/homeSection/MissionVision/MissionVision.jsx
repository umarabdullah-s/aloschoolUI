import React from 'react'
import styles from './missionVision.module.css'
import img from "@/assets/homepage/missionvision/missionvision.png"

const MissionVision = () => {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p className={styles.para}>
            South Tamil Nadu’s 1st Elite <br />
            Design & Technology <br />
            College
          </p>
        </div>
        <div className={styles.content}>
          <div className={`${styles.missionvision} ${styles.left}`}>
            <p className={styles.paras}>Mission</p>
            <p className={styles.desc}>
              To prepare aspiring designers for real careers through practical
              learning, mentorship, and hands-on projects. We help students
              build industry-ready skills, strong portfolios, and the confidence
              to succeed in the evolving digital design world.
            </p>
          </div>
          <div className={styles.img}>
            <div className={styles.imgdiv}>
              <img src={img.src} alt="" />
            </div>
            <div className={styles.circle}>
              <div className={styles.dot}></div>
              <div className={styles.btn}>More about ALO</div>
            </div>
          </div>

          <div className={`${styles.missionvision} ${styles.right}`}>
            <p className={styles.paras}>Vision</p>
            <p className={styles.desc}>
              To grow ALO School of Design & Technology as a practical, industry
              focused learning space where aspiring designers gain real skills,
              build strong portfolios, and become confident UI/UX professionals
              ready for today’s digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision