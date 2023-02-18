import React from "react";

const Section1 = ({ logo, fixedCPosition, scrollCPosition }) => {
  return (
    <div className="section_wrapper">
      <img
        className="position_absolute_center"
        src={logo}
        alt=""
        height={"auto"}
        width={"200px"}
      />
    </div>
  );
};

export default Section1;
