import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        // <footer>
        //     <div className='footer-div1'>
        //         <div>
        //             <h3>Elegance</h3>
        //             <p>Opening Hours: <br />Mon - Sat 10Am - 6PM</p>
        //             <a href="">info@elegance.com</a>
        //         </div>

        //         <div>
        //             <h4>Contact</h4>
        //             <p>11 Broadway Lobby 4New York, <br />NY 10004(234) 08 98 243</p>
        //         </div>

        //         <div>
        //             <h4>Menu</h4>
        //             <ul>
        //                 <li>Home</li>
        //                 <li>Shop</li>
        //                 <li>About us</li>
        //                 <li>Contact us</li>
        //             </ul>
        //         </div>

        //         <div>
        //         <h4>Fast link</h4>
        //             <ul>
        //                 <a href="">Cart</a>
        //                 <a href="">My accout</a>
        //                 <a href="">Contact us</a>
        //                 <a href="">Reviews</a>
        //             </ul>
        //         </div>
        //     </div>

        //     <div>
        //         <div>
        //             <a href="">Copyright@CITYDENTAL.All Rights Reserved.</a>
        //         </div>

        //         <div>
        //             <a href=""><img src="./images/image 4.png" alt="" /></a>
        //             <a href=""><img src="./images/image 5.png" alt="" /></a>
        //             <a href=""><img src="./images/image 7.png" alt="" /></a>
        //         </div>
        //     </div>
        // </footer>

        <footer>
            <div className='top'>
                <div className="footer-box">
                    <div className='footer-box-child'>
                        <h4>Elegance</h4>
                        <p>Opening Hours:</p>
                        <p>Mon - Sat 10Am - 6PM</p>
                        <p>info@elegance.com</p>
                    </div>
                </div>
                <div className="footer-box"></div>
                
                <div className="footer-box">
                    <div className='footer-box-child'>
                        <h4>Menu</h4>
                        <p><a href="">Home</a></p>
                        <p><a href="">Shop</a></p>
                        <p><a href="">About Us</a></p>
                        <p><a href="">Contact Us</a></p>
                    </div>

                    <div className='footer-box-child2'>
                        <h4>Contact</h4>
                        <p>11 Broadway Lobby 4</p>
                        <p>New York, NY 10004</p>
                        <p>(234) 08 98 243</p>
                    </div>

                    <div className='footer-box-child3'>
                        <h4>Fast links</h4>
                        <p><a href="">Cart</a></p>
                        <p><a href="">Account</a></p>
                        <p><a href="">Contact</a></p>
                        <p><a href="">Reviews</a></p>
                    </div>
                </div>
                <div className="footer-box"></div>
            </div>


            <div className='bottom'>
                <div className='left'>
                    <p>Copyright@CITYDENTAL.All Rights Reserved.</p>
                </div>
                <div className='right'>
                    <div className="icons-container">
                        <div>
                            <a href=""><img src="./images/image 4.png" alt="" /></a>
                            <a href=""><img src="./images/image 5.png" alt="" /></a>
                            <a href=""><img src="./images/image 7.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
