import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopcontext';
import { assets } from '../assets/frontend_assets/assets';
import Relatedproduct from '../components/Relatedproduct';

const Product = () => {

   const { ProductId } = useParams()
   const { products,currency,addToCart} = useContext(ShopContext)
   const [productsdata, setproductsdata] = useState(null);
   const [image, setimage] = useState('')
   const [size,setsize]=useState([])

   useEffect(() => {

      if (!products) return;

      const product = products.find(item => item._id == ProductId)

   

      setproductsdata(product)
      setimage(product?.image[0])

   }, [ProductId, products])

   return productsdata ? (
      <div className=' flex-1 border-t-2 pt-10 transition-opacity ease-in  duration-500 opacity-100'>
         {/* product data */}
         <div className='flex  flex-col-reverse gap-3 sm:flex-row'>

            {/* thumbs */}
            <div className='flex  sm:flex-col  justify-between sm:justify-normal sm:w-[18.7%] w-full flex-shrink-0'>
               {productsdata.image.map((item, index) => (
                  <img onClick={() => setimage(item)} src={item} key={index} className="w-[47%] " alt="" />
               ))}
            </div>

            {/* BIG image */}
            <div className='flex-1'>
               <img src={image} className='w-[90%]' alt="" />
               <div className='w-full h-[60px]'>  {/* choose height you want */}
                  
               </div>
            </div>
            {/* -------------product detais------------ */}
            <div className='flex-1  '>
              <h1 className='font-medium text-2xl mt-2'>{productsdata.name}</h1>
              <div className='flex gap-1 items-center'>
                   <img src={assets.star_icon} alt="" className="w-3 5" />
                   <img src={assets.star_icon} alt="" className="w-3 5" />
                   <img src={assets.star_icon} alt="" className="w-3 5" />
                   <img src={assets.star_icon} alt="" className="w-3 5" />
                   <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                   <p className='pl-2'>(122)</p>
              </div >
              <p className='mt-5 font-medium text-3xl'>{currency}{productsdata.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5' >{productsdata.description}</p>
              <div className='flex flex-col gap-4 my-8'>
              <p className=''>Select Size</p>
              <div className='flex gap-2'>
                   {productsdata.sizes.map((item,index)=>(
                     <button onClick={()=>setsize(item)} className={`border py-2 px-4 border-gray-100 ${item === size ? "border-orange-500" : '' }`} key={index}>{item} </button>
                   ))}
              </div>
              </div>
              <button onClick={()=>addToCart(productsdata._id,size)} className='bg-black text-white  px-8 py-3 text-sm active:bg-gray-700'>ADD TO CARD</button>
             
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>100% orignal Product</p>
                    <p>Case on delivery is avalibal on this Product</p>
                    <p> Easy return and exchange policy in 7day</p>
              </div>
            </div>
         </div>
         {/* ----------discription---------- */}
         <div className='mt-20'>
            <div className='flex'>
               <b className='border border-gray-200  px-5 py-3 text-sm '>Description</b>
               <p className='border border-gray-200 px-5 py-3 text-sm'>Reviews(122)</p>
            </div> 
            <div className=" flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500" >
               <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as o virtual marketplace where businesses and individuals.con showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
               <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            </div>
         </div>
          {/* display latest product  */}
          <Relatedproduct category={productsdata.category} subCategory={productsdata.subCategory}/>
      </div>
   ) : <div className='opacity-0'></div>
}

export default Product  