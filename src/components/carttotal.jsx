import React, { useContext } from 'react'
import { ShopContext } from '../context/shopcontext'
import Title from './titel'

const Carttotal = () => {

const { currency, delivery_fee, getcarttotal } = useContext(ShopContext)

  return (
    <div className='w-full'>
        <div className='text-2xl'> 
             <Title text1={"CARD"} text2={"TOTALS"}/>
        </div>
        <div className='flex flex-col gap-2  mt-w text:sm'>
          <div className='flex justify-between '>
              <p>Subtotal</p>
              <p>{currency} {getcarttotal()}.00</p>
          </div>
          <hr/>
          <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>{currency}{delivery_fee}.00</p>
            <hr/>
            <div className='flex justify-between'>
               <b>Total</b>
               <b>{currency}{getcarttotal() === 0 ? 0 : getcarttotal() + delivery_fee }</b>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Carttotal
