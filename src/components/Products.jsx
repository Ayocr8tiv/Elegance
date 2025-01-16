import React from 'react'
import '../styles/Products.css'

const Products = () => {
  return (
    <main className='main3'>
        <div className='product-jew'>
            <h2 className='jew'>Jewelry</h2>
            <p>Discover our exquisite collection of handcrafted <br /> jewelry.</p>
        </div>

        <div className='all-products'>

            <div className='product-con'>
            <img src="./images/image (9).png" alt="" />
            <h4>Gold Necklace</h4>
            <p>Classic</p>
            <h4>$120</h4>

            <button className='product-btn'>Add to cart</button>
            </div>

            <div>
            <img src="./images/image (10).png" alt="" />
            <h4>Sliver Ring</h4>
            <p>Elegant</p>
            <h4>$75</h4>

            <button className='product-btn'>Add to cart</button>
            </div>

            <div>
            <img src="./images/image (11).png" alt="" />
            <h4>Diamond Earrings</h4>
            <p>Brilliant</p>
            <h4>$200</h4>

            <button className='product-btn'>Add to cart</button>
            </div>

            <div>
            <img src="./images/image (12).png" alt="" />
            <h4>Charm Bracelet</h4>
            <p>Trendy</p>
            <h4>$85</h4>

            <button className='product-btn'>Add to cart</button>
            </div>


        </div>

        <div className='all-products2'>

            <div className='product-con'>
            <img src="./images/image (13).png" alt="" />
            <h4>Pearl Pendant</h4>
            <p>Sophisticated</p>
            <h4>$150</h4>

            <button className='product-btn'>Add to cart</button>
            </div>

            <div>
            <img src="./images/image (14).png" alt="" />
            <h4>Turquoise Bracelet</h4>
            <p>Vibrant</p>
            <h4>$60</h4>

            <button className='product-btn'>Add to cart</button>
            </div>

            <div>
            <img src="./images/image (15).png" alt="" />
            <h4>Ruby Ring</h4>
            <p>Glamorous</p>
            <h4>$95</h4>

            <button className='product-btn'>Add to cart</button>
            </div>

            <div>
            <img src="./images/image (16).png" alt="" />
            <h4>Sapphire Necklace</h4>
            <p>Stunning</p>
            <h4>$130</h4>

            <button className='product-btn'>Add to cart</button>
            </div>


        </div>
    </main>
  )
}

export default Products
