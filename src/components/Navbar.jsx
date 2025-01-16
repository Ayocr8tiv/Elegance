import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="./images/Group 1 (1).png" alt="" />
        </div>

        <div>
            <ul>
                <li><a href="#shop">Shop now</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact us</a></li>
                <li><a href="#option">More option</a></li>
                
            </ul>
        </div>

        <div className='btn'>
            <button className='btn1'>Cart</button>
            <button className='btn2'>Help</button>
        </div>
    </nav>
  )
}

export default Navbar
