import React from "react";
import "../Styles/MiniStyles.sass"

const LearnMore = ({the_head, the_body, the_link, head2, the_class}) => {
  return (
    <div className={`top_section ${the_class}`}>
      <div className="section2_head">{the_head} <br/> {head2}</div>
      <div className="section2_txt">
        {the_body}
      </div>
      <div className="section2_link">{the_link} &#8594;</div>
    </div>
  );
};

export default LearnMore;
