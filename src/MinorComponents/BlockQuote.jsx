import React from "react";
import "../Styles/MiniStyles.sass"

const BlockQuote = ({ the_quote, the_name, the_img, the_role }) => {
  return (
    <div className="sectioon3_real">
      <blockquote>"{the_quote}"</blockquote>
      <div className="quoter">
        <img src={the_img} alt="quoter logo" />
        <div className="quoter_details">
          <span className="quoter_name">{the_name}</span>
          <span className="quoter_role">{the_role}</span>
        </div>
      </div>
    </div>
  );
};

export default BlockQuote;
