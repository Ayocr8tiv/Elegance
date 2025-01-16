import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <main>
        <div className='hero-section'>
            <img src="./images/bg.png" alt="Background" className='hero-image' />

          <div className='discover'>
            <h1>Discover Timeless <br /> Elegance in Every Piece</h1>
            <p>Explore our exquisite collection of handcrafted jewelry designed to <br /> elevate your style. 
                Each piece tells a unique story, perfect for any <br /> occasion.</p>

              <div className='hero-btn'>
                  <button className='hero-btn1'>Shop</button>
                  <button className='hero-btn2'>Learn more</button>
            </div>

            <div className='hero-img'>
              <img src="./images/hero-img 1.png" alt="" />
              <img src="./images/hero-img2.png" alt="" />
              <img src="./images/hero-img3.png" alt=""  className='image-up'/>
              <img src="./images/hero-img4.png" alt="" />
            </div>

          </div>

            
        </div>

    </main>
  )
}

export default Hero
