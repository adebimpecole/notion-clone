import React from 'react'
import "../Styles/MiniStyles.sass"


const IconTab = ({the_icon, the_title, onClick}) => {
  return (
    <div className='icon_tab' onClick={onClick}>
      <img src={the_icon} alt='icon_tab icon'/>
      <span className='icon_tab_title'>{the_title}</span>
    </div>
  )
}

export default IconTab
