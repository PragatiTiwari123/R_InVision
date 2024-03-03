import React from 'react'
import { Link } from 'react-router-dom'

function MainText() {
  return (
    <div className='main-text'>
        <div className="heading">
            <h2>Hello XYZ !!</h2>
            <h3>Welcome to R_InVision</h3>
        </div>
        <div className='sub-heading'>
            <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum beatae delectus omnis.</h6>
        </div>
        <Link to='cards'>
          <i>Button</i>
        </Link>
        
    </div>
  )
}

export default MainText