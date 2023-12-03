import React from "react";
import "../Styles/MiniStyles.sass"

const ListItemIcon = ({the_icon, the_head, the_text, the_key, the_style}) => {
  return (
    <li className="list_item" key={the_key}>
      <img src={the_icon} className="list_icon" alt="icon" style={the_style}/>
      <span className="list_text">
        <span className="text_head">{the_head}</span>
        <span className="text_subhead">{the_text}</span>
      </span>
    </li>
  );
};

export default ListItemIcon;
