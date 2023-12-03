import React from 'react'
import "../Styles/MiniStyles.sass"

const SlideButton = ({the_count}) => {
  return (
    <div className='button_div'>
      <span className={`${the_count == 0 ? `the_selected` : ""}`}></span>
      <span className={`${the_count == 1 ? `the_selected` : ""}`}></span>
      <span className={`${the_count == 2 ? `the_selected` : ""}`}></span>
      <span className={`${the_count == 3 ? `the_selected` : ""}`}></span>
    </div>
  )
}

export default SlideButton
