import React from "react";
import BandD from "../../Assets/B&D.svg";

const Footer = () => {
  return (
    <footer>
      <img src={BandD} alt="" />
      <p>
        We collaborate with ambitious brands and people. Let's build.{" "}
        <a href="/">biz@darksied.com</a>
      </p>

      <div>
        <h6>Stay in the know</h6>
        <input placeholder="Email Address" />
      </div>

      <div>
        <h6>Initiatives</h6>
        <ul>
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
      <div>
        <h6>Social</h6>
        <ul>
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
      <div>
        <h6>Offices</h6>
        <ul>
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
      <div>
        <p>BASIC/DEPT®, Inc 10 - 23©</p>
        <p>Easy to understand, impossible to ignore.™</p>
        <p>Terms, Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
