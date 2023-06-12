import React from "react";

const Sq = ({ colorValue }) => {
  return (
    <section className="square" style={{ backgroundColor: colorValue }}>
      <p>{colorValue ? colorValue : "Empty value"}</p>
    </section>
  );
};
Sq.defaultProps = {
  colorValue: "Empty value",
};

export default Sq;
