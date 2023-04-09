import React from "react";
import img from "../../../Assets/silhouette.webp";
import img1 from "../../../Assets/sign.svg";

const SingleArticle = () => {
  return (
    <div>
      <img src={img} alt="" />
      <h6>Introducing Rev by Lyft</h6>
      <p>
        Press<span>3.28.23</span>
      </p>
      <img src={img1} alt="" />
    </div>
  );
};

export default SingleArticle;
