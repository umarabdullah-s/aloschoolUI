

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import img from "@/assets/header/logo.png";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "react-phone-input-2/lib/style.css";
import ContactModal from "@/components/model/ContactModal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); 
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState(false);

  
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logo}>
          <img src={img.src} alt="logo" />
        </Link>

        <div className={`${styles.menu} ${open ? styles.show : ""}`}>
          <Link
            href="/about"
            className={`${styles.items} ${pathname === "/about" ? styles.active : ""}`}
          >
            About
          </Link>

          <Link
            href="/program"
            className={`${styles.items} ${pathname === "/program" ? styles.active : ""}`}
          >
            Program
          </Link>

          <Link
            href="/campus-life"
            className={`${styles.items} ${pathname === "/campus-life" ? styles.active : ""}`}
          >
            Campus Life
          </Link>

          <Link
            href="/contact"
            className={`${styles.items} ${pathname === "/contact" ? styles.active : ""}`}
          >
            Contact
          </Link>

          <div className={styles.menuBtn} onClick={() => setOpenModal(true)}>
            <p>Touch With Us</p>
          </div>
        </div>

        <div className={styles.btn} onClick={() => setOpenModal(true)}>
          <p>Touch With Us</p>
        </div>

        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>
      <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Header;
