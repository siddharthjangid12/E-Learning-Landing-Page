import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-list">
            <ul className="nav-list">
                <li>Home</li>
                <li>Courses</li>
                <li>Teachers</li>
                <li>About</li>
                <li>Contact</li>
                <button className='button'>Join Now</button>
            </ul>
    
        </div>
    </nav>
  )
}

export default Navbar