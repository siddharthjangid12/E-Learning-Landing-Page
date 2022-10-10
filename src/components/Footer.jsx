import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <header className='footer'>
      <div className="main-footer">
       <div className="footer-list">
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Teachers</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
       </div>

       <div className="footer-list-2">
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
            <li>Ask a Question</li>
            <li>Report</li>
            <li>Enquiry</li>
          </ul>
       </div>

       <div className="footer-list-3">
        <h2>Enter your e-mail address</h2>
        <form action="" className='footer=form'>
          <input type="email" placeholder='E-mail' className='footer-input' />
        </form>
        <button className='footer-btn'>Subscribe</button>
       </div>
      </div>
    </header>
  )
}

export default Footer