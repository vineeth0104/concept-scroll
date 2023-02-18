import React from "react";
import ActiveSection from "./ActiveSection";
import InactiveSection from "./InactiveSection";

const Section2 = ({ logo, fixedCPosition, scrollCPosition, active }) => {
  return (
    <div className="section_wrapper section2">
      <img
        className="position_absolute_center"
        src={logo}
        alt=""
        height={"auto"}
        width={"200px"}
      />
      {active ? <ActiveSection /> : <InactiveSection />}
    </div>
  );
};

export default Section2;
