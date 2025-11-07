import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from "../context/shopcontext"
import Title from './titel';
import Productiteam from './productiteam';

const latestproduct = () => {

    const {products} = useContext(ShopContext);
    const [latestpro,setlatestpro]=useState([]);

    useEffect(()=>{
      setlatestpro(products.slice(0,10));
    },[]);
    
  return (
    <div className='my-10'>
       <div className='text-center py-8 text-5X1'>
        <Title className="font-medium" text1={"LATEST"} text2={"COLLECTION"}/>
        <p className='w-3/4 m-auto text-xl  sm:text-sm text-base text-gray-600'>
          lorem Ipsum is simply dummy text of the printting and typesetting industry.lorem Ipus hase been the .</p>
       </div>
       {/* rendering multipal products */}
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-4 gap-y-6">
           {
             latestpro.map((item,index)=>(
              <Productiteam key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
             ))
           }
       </div>
    </div>
  )
}

export default latestproduct ;
