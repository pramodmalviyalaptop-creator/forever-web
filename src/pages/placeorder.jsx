import React, { useState } from 'react'
import Title from '../components/titel';
import Carttotal from '../components/carttotal';
import { assets } from '../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';

function Placeorder() {

     const [method,setmethod]=useState('cod')
     const navigate = useNavigate()
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t  '>
      {/* ------------------left side ------------------ */}
      <div className=" flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl my-3 sm:text-2xl">
            <Title text1={"DELIVERY"} text2={"INFORMATION" }/>
          </div>
          <div className="gap-3 flex ">
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text"  placeholder='First Name' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text"placeholder='Last Name' />
          </div>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text"  placeholder='Street' />
          <div className="gap-3 flex ">
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text"  placeholder='City' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text"placeholder='State' />
          </div>
           <div className="gap-3 flex ">
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number"  placeholder='Zipcode' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text"placeholder='Country' />
          </div>
                      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number"placeholder='Phone' />

      </div>
      {/*---------------------------- right side ---------------------- */}

      <div className="mt-8 min-w-80  ">
        <Carttotal/>
        <Title className="text-sm" text1={'PAYMENT'}  text2={"METHOD"}/>
         <div className="flex  items-center gap-3  pr-2 px-3 cursor-pointer">
                <p onClick={()=>setmethod('strip')} className={`min-w-3.5 h-3.5 border  rounded -full ${method ==='strip' ? 'bg-gray-400' : ''}`}></p>
                <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                <p onClick={()=>setmethod('razorpay')} className={`min-w-3.5 h-3.5 border  rounded -full  ${method ==='razorpay' ? 'bg-gray-400' : ''} `}></p>
                 <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                 <p onClick={()=>setmethod('case')} className={`min-w-3.5 h-3.5 border  rounded -full  ${method ==='case' ? 'bg-gray-400' : ''} `}></p>
                  <p className='text-gray-500 text-sm font-medium mx-4'>CASE ON DELIVARY</p>
             </div>
               <div className="w-full text-end mt-8 ">
          <button onClick={()=>navigate("/orders")} className='bg-black text-white px-16 font-medium text-sm h-10'>PLACE ORDER</button>
         </div>
        {/*  */}
      </div>
       
    </div>
  )
}

export default Placeorder;