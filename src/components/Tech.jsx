import React from "react";
import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </div>
      
      {/* Single canvas containing all tech balls */}
      <div className="w-full h-[20vh] mt-10">
        <BallCanvas technologies={technologies} />
      </div>
      
      {/* Technology names displayed in a grid */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="text-center w-15" key={technology.name}>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");