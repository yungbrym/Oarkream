import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpa__possibility__padding' id='possibility'>
    <div className='gpa__possibility-image'>
    <img src={possibilityImage} />
    </div>

    <div className='gpa__possibility-content'>
      <h4>
        Request early access to get in move
      </h4>
    </div>
    </div>
  )
}

export default Possibility