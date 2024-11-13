import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>subscribe to our newsletter and stay updated</p>
      <div>
        <input type="mail" placeholder='Enter your mail ID' />
        <button>Subscribe</button>
      </div>
    </div>
  )

}

export default NewsLetter 
