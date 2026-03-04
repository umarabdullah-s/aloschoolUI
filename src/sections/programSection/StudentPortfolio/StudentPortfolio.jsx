import React, { useEffect, useState } from "react";
import styles from "./studentportfolio.module.css";
import { FaBehance } from "react-icons/fa";
import { getPortfolioOnly } from "@/api/serviceApi";
import { TbFoldersOff } from "react-icons/tb";

const StudentPortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const res = await getPortfolioOnly();

      // ✅ API returns data[]
      const workData = res.data.data.filter(
        (item) => item.model === "work"
      );

      setPortfolio(workData);
    } catch (err) {
      console.error("Portfolio fetch failed", err);
    }
  };

  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <p className={styles.title}>Students Portfolio</p>
          <p className={styles.para}>
            A Showcase of Real Projects Created by
            <br />
            Our Talented Students
          </p>
        </div>

        <div className={styles.cards}>
          {portfolio.map((item) => (
            <div className={styles.card} key={item._id}>
              <div className={styles.img}>
                <img src={item.alumniImage} alt="project" />
              </div>

              <div className={styles.desc}>
                <div className={styles.profile}>
                  <div className={styles.profileimg}>
                    <img src={item.companyLogo} alt="profile" />
                  </div>

                  <div className={styles.profilename}>
                    <p className={styles.name1}>{item.alumniName}</p>
                    <p className={styles.name2}>{item.position}</p>
                  </div>
                </div>

                <div className={styles.profilelink}>
                  <FaBehance className={styles.behanceIcon} />
                </div>
              </div>
            </div>
          ))}

          {portfolio.length === 0 && (
            <div className={styles.emptyState}>
              <TbFoldersOff className={styles.emptyIcon} />
              <p className={styles.emptyTitle}>No Portfolio Yet</p>
              <p className={styles.emptySub}>
                Student projects will appear here once uploaded
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentPortfolio;