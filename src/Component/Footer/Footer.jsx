import React from "react";
import BandD from "../../Assets/BandD.jsx";
import styles from "./styles.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-white xl:mt-80">
      <div
        className={`${styles.grid} px-[6vw] bg-black opacity-90 pb-16 pt-1  xl:pt-20`}
      >
        <div className={`w-12 my-10 ${styles.first} xl:w-20 my-0`}>
          <BandD color="white" />
        </div>
        <p
          className={`max-w-[68vw] font-semibold text-xl mb-16 ${styles.second} xl:text-3xl xl:font-normal `}
        >
          We collaborate with ambitious brands and people. Let's build.{" "}
          <a href="/" className="underline">
            biz@darksied.com
          </a>
        </p>

        <div className={`relative mb-10 ${styles.third}`}>
          <h6
            className={`${styles.add_circle} uppercase text-sm font-bold mb-6 mt-6`}
          >
            Stay in the know
          </h6>
          <input
            placeholder="Email Address"
            className="w-full bg-transparent border-b pb-4 placeholder:text-white placeholder:text-sm focus:outline-none "
          />
          <AiOutlineArrowRight className="absolute bottom-5 right-0 w-5 min-h-[1.25rem] xl:bottom-24 " />
        </div>

        <div className={styles.fourth}>
          <h6
            className={`${styles.add_circle} uppercase text-sm font-bold mb-6 mt-6`}
          >
            Initiatives
          </h6>
          <ul className="text-sm">
            <li>
              <a href="/">Crafted</a>
            </li>
            <li>
              <a href="/">Applied</a>
            </li>
            <li>
              <a href="/">Brandbeats</a>
            </li>
            <li>
              <a href="/">Moves</a>
            </li>
            <li>
              <a href="/">B®/Good</a>
            </li>
          </ul>
        </div>
        <div className={styles.fourth}>
          <h6
            className={`${styles.add_circle} uppercase text-sm font-bold mb-6 mt-6`}
          >
            Social
          </h6>
          <ul className="text-sm">
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">LinkedIn</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
          </ul>
        </div>
        <div className={styles.fourth}>
          <h6
            className={`${styles.add_circle} uppercase text-sm font-bold mb-6 mt-6`}
          >
            Offices
          </h6>
          <ul className="text-sm">
            <li>
              <a href="/">San Diego - CA</a>
            </li>
            <li>
              <a href="/">New York - NY</a>
            </li>
            <li>
              <a href="/">Bay Area -Ca</a>
            </li>
            <li>
              <a href="/">St. Louis - MO</a>
            </li>
            <li>
              <a href="/">Amsterdam - NL</a>
            </li>
            <li>
              <a href="/">London - EN</a>
            </li>
            <li>
              <a href="/">Berlin - GE</a>
            </li>
            <li>
              <a href="/">Argentina - AR</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black uppercase text-[.65rem] text-center py-6 xl:flex justify-between xl:px-16">
        <p className="mt-2 opacity-40">BASIC/DEPT®, Inc 10 - 23©</p>
        <p className="mt-2 opacity-40">
          Easy to understand, impossible to ignore.™
        </p>
        <p className="mt-2 opacity-40">Terms, Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
