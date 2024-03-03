import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Home.css'
// import { IoCall,IoLogoGithub,IoMailUnreadSharp,IoLogoInstagram,IoLogoFacebook,IoLogoLinkedin} from "react-icons/io5";

function Footer() {
  // return (
  //   <div className='flex flex-col gap-2 text-pink-400'>
  //       <Link to=''>Home</Link>
  //       <Link to='buyer'>
  //           Go To Buyer
  //       </Link>
  //       <Link to='seller'>
  //           Go To Seller
  //       </Link>
  //       <Link to='about'>
  //           About
  //       </Link>
  //   </div>
  // )
  return(
    <div className="footer">
     <div className="contact">
         <div className="contact-box">
         <h2 style={{padding: '10px', color:'teal'}}>Contact-us</h2>
           {/* <p><IoCall style={{fontSize: '4vh'}}/>  +91 824651985</p> */}
           {/* <p><IoMailUnreadSharp style={{fontSize: '4vh'}}/> you12@gmail.com</p> */}
         </div>
      </div>

     <div className="links">
     <ul>
      <h2 style={{ color: 'teal' }}>Helpful links</h2>
      <li>
        {/* <a href="#">About-us</a> */}
        <Link to='about'>
          About us 
        </Link>
      </li>
      <li>
        {/* <a href="#">Feedback</a> */}
        <Link to='' className='a'>
          Feedback 
        </Link>
      </li>
      <li>
        {/* <a href="#">Terms & Condition</a> */}
        <Link to='' className='a'>
          Terms & Condition
        </Link>
      </li>
      <li>
        {/* <a href="#">Service</a> */}
        <Link to='' className='a'>
          Services 
        </Link>
      </li>
      <li>
        {/* <a href="#">Privacy & Policy</a> */}
        <Link to='' className='a'>
          Privacy & Policy 
        </Link>
      </li>
      <li>
        {/* <a href="#">Support</a> */}
        <Link to='' className='a'>
          Support 
        </Link>
      </li>
      <li>
        {/* <a href="#">Career</a> */}
        <Link to='' className='a'>
          Career
        </Link>
      </li>
    </ul>
 </div>

     <div className="social-media">
        <div className="media-box">
        <h2 style={{padding: '10px', color:'teal'}}>Socio-link</h2>
        {/* <p><IoLogoGithub style={{fontSize: '4vh'}} />Github</p>
        <p><IoLogoInstagram style={{fontSize: '4vh'}} />Instagram</p>
        <p><IoLogoFacebook style={{fontSize: '4vh'}} />Facebook</p>
        <p><IoLogoLinkedin style={{fontSize: '4vh'}} />LinkedIn</p> */}
        </div>
        </div> 
    </div>
);
}

export default Footer