import React from 'react'
import "../Styles/MiniStyles.sass"

const Tweet = ({the_name, the_handle, the_img, the_tweet1, the_tweet2, the_key}) => {
  return (
    <div className={`tweet_container${the_key}`}>
      <div className='user'>
        <img src={the_img} alt='profile picture'/>
        <div className='user_name'>
            <span className='real_name'>{the_name}</span>
            <span className='handle'>@{the_handle}</span>
        </div>
      </div>
      <div className='tweet'>
        {the_tweet1}
        <span className="tweet_mention__xiDE6">@NotionHQ</span>
        {the_tweet2}
      </div>
    </div>
  )
}

export default Tweet
