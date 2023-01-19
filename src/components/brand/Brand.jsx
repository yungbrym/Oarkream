import React from 'react'
import './brand.css'
import { FaInstagram,FaFacebook, FaDropbox, FaTwitter, FaSlack} from 'react-icons/fa'

const Brand = () => {
  return (
    <div className='social-links'>
      <div className='icon'>
      <FaInstagram className='fab fa-instagram'/> 
        <FaFacebook className='fab fa-facebook'/>
        <FaTwitter className='fab fa-twitter'/>
        <FaDropbox className='fab fa-dropbox'/>
        <FaSlack className='fab fa-slack'/>
        
      </div>
       
      </div>
      
      
  )
  }

export default Brand