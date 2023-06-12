import React from "react";

const Sq = ({ colorValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#fff",
      }}
    >
      <p>{colorValue ? colorValue : "Empty value"}</p>
    </section>
  );
};
Sq.defaultProps = {
  colorValue: "Empty value",
};

export default Sq;
