import React from 'react'
import "./products.css"

const Products = () => {
  return (
    <header className='product'>
        <h2>Best Courses <span>For You</span></h2>
        <div className="course-list">
            <div className="course-name">
                <img src="./images/course-p-5.jpg" alt="" className='course-image' />
                <h3>Web Development E-Course</h3>
                <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>42 Review</h5>
                <button className='course-btn'>Join Now</button>
            </div>

            <div className="course-name">
                <img src="./images/uiux.jpg" alt="" className='course-image' />
                <h3>UI-UX Designing E-Course</h3>
                <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>39 Review</h5>
                <button className='course-btn'>Join Now</button>
            </div>

            <div className="course-name">
                <img src="./images/course-p-7.jpg" alt="" className='course-image' />
                <h3>App Development E-Course</h3>
                <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>42 Review</h5>
                <button className='course-btn'>Join Now</button>
            </div>

            <div className="course-name">
                <img src="./images/course-p-6.jpg" alt="" className='course-image' />
                <h3>Java Programming E-Course</h3>
                <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>49 Review</h5>
                <button className='course-btn'>Join Now</button>
            </div>
        </div>
    </header>
  )
}

export default Products