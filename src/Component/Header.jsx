import React from "react";
import Logo from "../Assets/Logo.jsx";
import Close from "../Assets/close.svg";
import Sign from "../Assets/sign.svg";
import Video from "../Assets/Header-video.mp4";
import { useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const cursorRef = useRef();

  const mousemoveHandler = (e) => {
    const { clientX, clientY } = e;
    cursorRef.current.style.top = clientY - 35 + "px";
    cursorRef.current.style.left = clientX - 35 + "px";
  };
  const mouseleaveHandler = (e) => {
    cursorRef.current.style.top = "50%";
    cursorRef.current.style.left = "50%";
  };
  useEffect(() => {
    document
      .querySelector("#header")
      .addEventListener("mousemove", mousemoveHandler);

    document
      .querySelector("#header")
      .addEventListener("mouseleave", mouseleaveHandler);

    return () => {
      document
        .querySelector("#header")
        .removeEventListener("mousemove", mousemoveHandler);
    };
  }, []);

  return (
    <header
      id="header"
      className="flex justify-between items-center px-4 pt-4 cursor-none overflow-hidden"
    >
      <div
        ref={cursorRef}
        className="absolute top-1/2 left-1/2  w-24 flex flex-col justify-center lg:w-32 "
      >
        <div className="bg-white rounded-[50%]  aspect-square text-center uppercase mx-3 mb-2 grid place-content-center">
          <p className="text-[11px] font-semibold leading-3 lg:text-[15px] lg:leading-5">
            Play <br />
            Reel
          </p>
        </div>

        <div className="text-white text-[10px] text-center font-bold lg:text-[13px]">
          <span>BASIC/DEPT®</span>

          <br />
          <span>2010 - 23©</span>
        </div>
      </div>

      <video
        // autoPlay
        loop
        muted
        className="fixed inset-0  min-h-screen object-cover -z-10"
      >
        <source src={Video} type="video/mp4" />
      </video>

      <div className="w-40">
        <Logo fill="#f4f4f4" />
      </div>

      <div className="hidden">
        <div>
          <Logo />
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
          <span>BASIC/DEPT®, inc</span>
          <span>10 - 23©</span>
        </div>
      </div>
      <button className="text-2xl text-[#f4f4f4]">Menu</button>
    </header>
  );
};

export default Header;
