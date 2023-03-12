import React from "react";
import Logo from "../Assets/logo.svg";
import Close from "../Assets/close.svg";
import Sign from "../Assets/sign.svg";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Basic/Dept" />
      <div>
        <div>
          <img src={Logo} alt="Basic/Dept" />
          <img src={Close} alt="Basic/Dept" />
        </div>
        <ul>
          <li>
            <a href="/">Work</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">news</a>
          </li>
          <li>
            <a href="/">Thinking</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">
              initiatives <img src={Sign} alt="" />
            </a>
          </li>
        </ul>
        <div>
          <span className="text-3xl">BASIC/DEPT®, inc</span>
          <span>10 - 23©</span>
        </div>
      </div>
      <button>Menu</button>
    </header>
  );
};

export default Header;
