import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Home.css'

function Header() {
    return(
        <>
        <div className="nav">
          <div className="logo">
           <h2>R_InVision</h2>
          </div>
    <ul>
        <li>
            {/* <a href="#">Home</a> */}
            <Link to='' className='a'>
                Home
            </Link>
        </li>
        <li>
            {/* <a href="#">For Buyer</a> */}
            <Link to='buyer' className='a'>
                For Buyer
            </Link>
        </li>
        <li>
            {/* <a href="#">For Builder</a> */}
            <Link to='seller' className='a'>
                For Builder
            </Link>
        </li>
        <li>
            {/* <a href="#">About-us</a> */}
            <Link to='about' className='a'>
                About-us
            </Link>
        </li>
        <li>
            {/* <a href="#">More</a> */}
            <Link to='' className='a'>
                More
            </Link>
        </li>
    </ul>
    <div className="sign-up">
      <ul >
      
        {/* <input placeholder="search" ></input> */}
        <li><a href="#">Sign In</a></li>
      </ul>
      {/* <div className="humberger-menu">
        <a href=""> <GiHamburgerMenu/> </a>
      </div> */}
    </div>
  </div>
        </>
    );
}

export default Header