import React from "react";
import "../Styles/MiniStyles.sass";

const PlainTab = ({ image, the_icon, real_deal, image_src, the_key }) => {
  return (
    <div className={`plain_containers${the_key}`}>
      <img className="plain_icon" src={the_icon} alt="container icon" />
      <div className="the_header">
        <span>{real_deal}</span>
        <div className="lil_link">Get template &#8594;</div>
      </div>
      <div className="plain_image">
        <img src={image_src} style={{ display: `${image}` }} />
      </div>
    </div>
  );
};

export default PlainTab;
