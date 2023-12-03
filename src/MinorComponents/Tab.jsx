import React from "react";
import "../Styles/MiniStyles.sass"

const Tab = ({the_title, the_body, lil_text, the_icon, the_color, the_background}) => {
  return (
    <div className="tabs" >
      <div className="tabs_heading">
        <img src={the_icon} alt="sprinkle" style={{background: `${the_background}`}}/>
        <div className="head_text">{the_title}</div>
        <div className="head_lil_text">{lil_text}</div>
      </div>
      <div className="tabs_body">
        {the_body}
      </div>
      <div className="tabs_link" style={{color: `${the_color}`}}>Learn more &#8594;</div>
    </div>
  );
};

export default Tab;
