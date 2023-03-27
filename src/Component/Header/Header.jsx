import React from "react";
import Logo from "../../Assets/Logo.jsx";
import Video from "../../Assets/Header-video.mp4";
import More from "../../Assets/more.svg";
import { useEffect, useRef, useState } from "react";
import Modal from "./Header-Modal";
import "./Header.css";

const Header = () => {
  const [showCursor, setshowCursor] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const cursorRef = useRef();

  const mousemoveHandler = (e) => {
    const { clientX, clientY } = e;
    if (clientY < 90) {
      mouseleaveHandler();
      setshowCursor(true);
      return;
    }
    cursorRef.current.style.top = clientY - 35 + "px";
    cursorRef.current.style.left = clientX - 35 + "px";
    setshowCursor(false);
  };
  const mouseleaveHandler = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      id="header"
      className={`flex justify-between items-center px-10 pt-10 overflow-hidden relative h-screen xl:px-20 ${
        showCursor ? "cursor-auto" : "cursor-none"
      }`}
    >
      {showModal && <Modal onCloseModal={handleCloseModal} />}
      <div
        ref={cursorRef}
        className="absolute top-1/2 left-1/2  w-24 flex flex-col justify-center lg:w-32 select-none"
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

      <div className="w-36 self-start">
        <Logo fill="#f4f4f4" />
      </div>

      <nav className=" hidden self-start flex-1 xl:block ">
        <ul className="text-white flex justify-around px-20 font-semibold uppercase">
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
        </ul>
      </nav>
      <button
        className="text-2xl text-[#f4f4f4] self-start xl:hidden"
        onClick={() => setshowModal(true)}
      >
        Menu
      </button>
      <button className="text-2xl text-[#f4f4f4] self-start  w-6 mt-2 hidden xl:block">
        <img src={More} alt="" />
      </button>
    </header>
  );
  function handleCloseModal() {
    setshowModal(false);
  }
};

export default Header;
