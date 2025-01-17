import React from 'react'
import '../styles/Testimonial.css'

const Testimonial = () => {
  return (
    <main className='main4'>
        <div>
            <h1>Customer Testimonials</h1>
            <p>Our customers love our unique jewelry designs!</p>

            <div className='all-tes'>

            <div className='tes-align'>

            <div>
            <img src="./images/Group 3 (1).png" alt="" />
            <h4>"The quality of the jewelry is outstanding! <br /> I wear it every day."</h4>

            <div className='tes-img'>
                <img src="./images/image (17).png" alt="" className='test-img' />
                <p className='tes-paragraph'>Emily Eliza <br /> Designer, Fashion Co.</p>
            </div>

            <div className='dot'>
                <img src="./images/Group 15 (1).png" alt="" />
            </div>

            </div>

         <div className='all-tes2'>

            <div>
            <img src="./images/Group 3 (1).png" alt="" />
            <h4>"I received so many compliments on my <br /> necklace!"</h4>

            <div className='tes-img'>
                <img src="./images/image (18).png" alt="" className='test-img' />
                <p className='tes-paragraph'>Emily Eliza <br /> Designer, Fashion Co.</p>
            </div>

            {/* <div className='dot'>
                <img src="./images/Group 15 (1).png" alt="" />
            </div> */}

            <div className='arrow-img'>
                <img src="./images/Group 7.png" alt="" />
            </div>

            </div>

            </div>
            </div>

            </div>

        </div>

        
    </main>
  )
}

export default Testimonial
