import React from "react";
import data from "./data";

const SectionTwo = () => {
  return (
    <section>
      <h1>Featured Engagement</h1>
      <ul>
        {data.map(({ link, Icon, Name, Text }, index) => (
          <li key={index}>
            <div>
              <img src={Icon} alt="/" />
              <span className="block w-5 h-1 bg-black"></span>
            </div>
            <h2>{Name}</h2>
            <p>
              {Text}
              {link && <a href="/">here.</a>}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionTwo;
