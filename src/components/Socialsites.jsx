import React from 'react'
import FacebookIcon from '../assets/facebookicon.png'
import InstagramIcon from '../assets/instagram.png'
import TwitterIcon from '../assets/twitter.png'
function Socialsites() {
  return (
    <div className="container">
      <div className='icons'>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img src={FacebookIcon} alt="facebook" className='icon' />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img src={InstagramIcon} alt="instagram" className='icon' />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <img src={TwitterIcon} alt="twitter" className='icon' />
      </a>
      </div>
     <h5>All rights reserved | Designed by <b><i>Tanzeel Khan</i></b></h5>
    
     </div>
  )
}

export default Socialsites
