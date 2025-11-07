import React from 'react'
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
              <div>
                <img src={assets.logo} className='md-5 w-32' alt="" />
                <p className='w-full md-w-2/3 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore autem, eum impedit doloribus omnis illo sit quidem natus nisi ratione beatae obcaecati ea laboriosam harum tempora labore neque! Ducimus, eum!</p>
              </div>
              <div>
                <p className='text-cl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col text-gray-600'>
                   <li>Home</li>
                   <li>About Us</li>
                   <li>Delivery</li>
                   <li>Privacy Policy</li>
                </ul>
              </div>
                   <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOCH</p>
                    <ul className='flex flex-col text-gray-600'>
                      <li>+919727990266</li>
                      <li>Pramodmalviya@gmail.com</li>
                    </ul>
                </div>
        </div>
        <div>
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com-All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer;
