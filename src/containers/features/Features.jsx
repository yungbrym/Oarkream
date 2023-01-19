import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData=[
  {
  title:'Trust and Assurance of servive',
  text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempoincididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam '
}


]

const Features = () => {
  return (
    <div className='gpa__features section__padding' id='Features'>
  <div className='gpa__features-heading'>
    <h1 className='gradient__text'>We Tapped Into The Future To Discover 
    And provide The Best Logistic Service, Just For You</h1>
 <p className='gradient__text'>Get Our Best Offers Asap</p> 
  </div>
  <div className='gpa__features-container'>
    {featuresData.map((item, index)=>(
   <Feature title={item.title} text={item.text} key={item.title + index}/>
    ))}
  </div>

    </div>
  )
  
}

export default Features