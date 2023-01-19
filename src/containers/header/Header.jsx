import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpa__header section__padding' id='#home'>
    <div className='gpa_header-content'>
      <h1 className='gradient__text'>
       
        Have a taste of the best, by letting Arkream deal with your logistics
        from USA
      </h1>
      <p>What if you could spend less time trying to source for foreign 
        currency for your online payments, coupled with easy and an prompt delivery process 
        from EBAY and ather shopping site in the USA.</p>
      
      <div className='gpa__header-content__people'>
        <img src={people} alt='people'/>
        <p >Over 1000 satisfied customers</p>
      </div>
    </div>
    <div className='gpa__header-image'>
        <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header