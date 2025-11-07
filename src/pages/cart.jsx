import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopcontext'
import Title from '../components/titel';
import { assets } from '../assets/frontend_assets/assets';
import Carttotal from '../components/carttotal';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { products ,currency ,carditems , updatequantity, } = useContext(ShopContext)  // << FIXED
  const navigate = useNavigate()
  const [cartdata,setcartdata] = useState([])

  useEffect(()=>{

    const tempdata= [] ;
    for (const items in carditems ){
      for(const item in carditems[items]){
        if (carditems[items][item] > 0) {
          tempdata.push({
            _id:items,
            size:item,
            quantity:carditems[items][item]
          })
        }
      }
    }

    setcartdata(tempdata)

  },[carditems])

  return (
    <div className='border-t pt-14'>
      <div className=" text-2xl mb-3 ">
        <Title  text1={'YOUR'} text2={'CART'}/>
      </div>

      <div>
        {cartdata.map((item,index)=>{

          const productdata = products.find((product)=>product._id === item._id )

          if(!productdata) return null

          return(
            <div key={index} className="  py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
              <div className="flex items-start gap-6">
                <img className='w-16 sm:w-20' src={productdata.image[0]} alt="" />
                 <p className='text-xs sm:text-lg font-medium'>{productdata.name}</p>
                <p>{currency}{productdata.price}</p>
                <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
              </div>
                  <div >
                    <input className="border border-gray-700 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" min={1} value={item.quantity} onChange={e => Number(e.target.value) > 0 && updatequantity(item._id, item.size, Number(e.target.value))} />

                  </div>
                    <img onClick={()=>updatequantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
            </div>
            
          )
        })}
      </div>
      <div className='flex justify-end my-20 '>
         <div className="w-full sm:w-[450px]">
          <Carttotal/>
         </div>
         <div className="w-full text-end">
            <button onClick={()=>navigate("/placeorder")} className='bg-black text-white text-sm my-8 px-8 py-3'>  PROCEED TO CHECKOUT</button>
         </div>
      </div>
    </div>
  )
}

export default Cart
