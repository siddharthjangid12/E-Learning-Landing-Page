import React from 'react'
import "./work.css"

const Work = () => {
  return (
    <header className='work'>
        <h2>How we <span>Best ?</span></h2>

    <div className="work-list">
        <div className="work-name">
            <img src="./images/work-1.jpg" alt="" className='work-image' />
            <h3>Online Chat Feature</h3>
        </div>

        <div className="work-name">
            <img src="./images/footer.jpg" alt="" className='work-image' />
            <h3>24/7 Student Support</h3>
        </div>

        <div className="work-name">
            <img src="./images/course-p-2.jpg" alt="" className='work-image' />
            <h3>Recorded Lectures</h3>
        </div>
    </div>

    </header>
  )
}

export default Work
