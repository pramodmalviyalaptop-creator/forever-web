import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopcontext';
import Title from './titel';
import Productiteam from './productiteam';

const Bestseller = () => {
    
    const {products} = useContext(ShopContext)
    const [bestseller,setbestseller]=useState([])

    useEffect(()=>{
        const bestproduct=products.filter((item)=>(item.bestseller));
        setbestseller(bestproduct.slice(0,5))
    },[])
    

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
          <Title text1={'BEST'} text2={'SELLERS'} />
          <p className='w-3/4  m-auto text-xl sm:text-sm md:text-base text-gray-600'> lorem Ipsum is simply dummy text of the printting and typesetting industry.lorem Ipus hase been the .</p>
        </div>
        <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
           { 
           bestseller.map((item,index)=>(
             <Productiteam key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
           ))
           }
        </div>
    </div>
  )
}

export default Bestseller ;
