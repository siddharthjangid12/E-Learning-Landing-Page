import React from 'react'
import "./home.css"
import Products from './Products'
import Work  from './Work'

const Home = () => {
  return (
   <header className='home'>
     <div className="home-banner">
      <img src="./images/teacher-1.jpg" alt="" className='home-banner-image' />
     </div>

     <Products />
     <Work />
   </header>
  )
}

export default Home