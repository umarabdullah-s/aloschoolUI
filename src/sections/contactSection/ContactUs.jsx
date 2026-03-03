import React from "react";
import styles from "./contact.module.css";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          We Are <span>Located</span> Here
        </p>

        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.6420293191654!2d77.38050007477052!3d8.19901779183287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1405923e1fb%3A0xdded763ce70bbd4d!2sALO%20Info-Tech!5e1!3m2!1sen!2sin!4v1770381032748!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.info}>
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.blue}`}>
              <FaPhoneAlt />
            </div>
            <div>
              <p className={styles.label}>Admission Hotline</p>
              <p className={styles.phone1}>+91 99947 25508</p>
              <p className={styles.phone1}>+91 99947 25508</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.orange}`}>
              <FaEnvelope />
            </div>
            <div>
              <p className={styles.label}>E-mail</p>
              <p className={styles.phone1}>+91 99947 25508</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.yellow}`}>
              <FaClock />
            </div>
            <div>
              <p className={styles.label}>Office Hours</p>
              <p className={styles.phone1}>Mon- Sat</p>
              <p className={styles.phone1}>09:00 AM to 06:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
