import React from "react";
import Logo from "../../Assets/Logo.jsx";
import Video from "../../Assets/Header-video.mp4";
import More from "../../Assets/more.svg";
import { useState } from "react";
import Modal from "./Header-Modal";
import HeaderHover from "./HeaderHover.jsx";

const Header = () => {
  const [showCursor, setShowCursor] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowCursor = () => setShowCursor(true);
  const handleHideCursor = () => setShowCursor(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <header
      id="header"
      className={`flex justify-between items-center px-10 pt-10 overflow-hidden relative h-screen xl:px-20 ${
        showCursor ? "cursor-auto" : "cursor-none"
      }`}
    >
      {showModal && <Modal onCloseModal={handleCloseModal} />}

      <HeaderHover
        handleShowCursor={handleShowCursor}
        handleHideCursor={handleHideCursor}
      />

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
        onClick={handleOpenModal}
      >
        Menu
      </button>
      <button className="text-2xl text-[#f4f4f4] self-start  w-6 mt-2 hidden xl:block">
        <img src={More} alt="" />
      </button>
    </header>
  );
};

export default Header;
