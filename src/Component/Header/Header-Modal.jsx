import React from "react";
import Close from "../../Assets/close.svg";
import Sign from "../../Assets/sign.svg";
import Logo from "../../Assets/Logo.jsx";

const Modal = ({ onCloseModal }) => {
  return (
    <div className=" fixed inset-0 bg-[#252422] text-[#f9cdcd] text-xl font-semibold z-50 cursor-auto py-10 px-10 md:text-3xl">
      <div className="flex h-[30px] justify-between mb-16 ">
        <div className="w-[130px] self-center">
          <Logo fill={"#f9cdcd"} />
        </div>

        <div
          className=" outline-white outline outline-1 grid place-content-center w-7 aspect-square rounded-[50%] cursor-pointer"
          onClick={onCloseModal}
        >
          <img src={Close} alt="Basic/Dept" className="w-4" />
        </div>
      </div>
      <ul>
        <li className="mb-5 uppercase  text-lg font-bold md:text-2xl ">
          <a href="/">Work</a>
        </li>
        <li className="mb-5 uppercase text-lg font-bold md:text-2xl ">
          <a href="/">About</a>
        </li>
        <li className="mb-5 uppercase text-lg font-bold md:text-2xl ">
          <a href="/">news</a>
        </li>
        <li className="mb-5 uppercase text-lg font-bold md:text-2xl ">
          <a href="/">Thinking</a>
        </li>
        <li className="mb-5 uppercase text-lg font-bold md:text-2xl ">
          <a href="/">Careers</a>
        </li>
        <li className="mb-5 uppercase text-lg font-bold md:text-2xl ">
          <a href="/">Contact</a>
        </li>
        <li className="mb-5 uppercase text-lg font-bold md:text-2xl ">
          <a href="/" className="flex gap-2">
            <span>initiatives </span>
            <img src={Sign} alt="" className="w-4 inline -rotate-90" />
          </a>
        </li>
      </ul>

      <div className="absolute bottom-0 text-[12px] mb-8 opacity-20">
        <span>BASIC/DEPT®, INC</span>
      </div>
    </div>
  );
};

export default Modal;
