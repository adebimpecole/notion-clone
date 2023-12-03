import React from "react";
import "../Styles/MiniStyles.sass"

const NumberTab = ({the_number, the_unit, the_key}) => {
  return (
    <div className={`number_tab${the_key}`}>
      <div className="the_number">{the_number}+</div>
      <div className="the_unit">{the_unit}</div>
    </div>
  );
};

export default NumberTab;
