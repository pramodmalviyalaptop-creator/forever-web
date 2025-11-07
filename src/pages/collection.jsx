import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopcontext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/titel';
import Productiteam from '../components/productiteam';

function Collection() {

  const { products ,search , showSearch } = useContext(ShopContext);
  const [showfilter, setshowfilter] = useState(false)
  const [allproduct, setallproduct] = useState([])
  const [category, setcategory] = useState([])
  const [subCategory, setsubCategory] = useState([])
  const [sortType,setsortType]=useState('relevant')



  const togglecategoty = (e) => {
    if (category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setcategory(prev => [...prev, e.target.value])
    }
  }


  const subtogglecategoty = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setsubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyfilter = () => {

    let productcopy = products.slice();

    if(showSearch && search){
    productcopy = productcopy.filter(item =>item.name.toLowerCase().includes(search.toLowerCase())
  )
}

    
    if (category.length > 0) {
      productcopy = productcopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productcopy = productcopy.filter(item => subCategory.includes(item.subCategory))
    }

    setallproduct(productcopy);
  }

  useEffect(() => {
    applyfilter();
  }, [category,subCategory,search,showSearch])

  const Sortproduct = ()=>{

     let fpcopy = allproduct.slice()

     switch(sortType){
      case 'low-high':
        setallproduct(fpcopy.sort((a,b)=>(a.price-b.price)));
        break;

        case 'high-low':
        setallproduct(fpcopy.sort((a,b)=>(b.price-a.price)));
        break;
        
        default:
          applyfilter();
          break;
     }

  }

  useEffect(()=>{
     Sortproduct();
  },[sortType])


  return (
    <div className='flex flex-col sm:flex-row  gap-1 sm:gap-10 pt-10 '>
      {/* filter option */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img onClick={() => setshowfilter(!showfilter)} className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium '> CATEGORIES</p>
          <div className="flex flex-col gap-2 font-light text-gray-700 text-sm">
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={togglecategoty} />Men
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={togglecategoty} />Women
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={togglecategoty} />Kids
            </p>
          </div>
        </div>
        {/* subcatogery filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium '>TYPE</p>
          <div className="flex flex-col gap-2 font-light text-gray-700 text-sm">
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={subtogglecategoty} />Topwear
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Bottomwear'} onChange={subtogglecategoty}/> Bottomwear
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={subtogglecategoty} />Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className='flex-1'>
        <div className=" flex justify-between text-base sm:text-2xl mb-4 ">
          <Title text1={'ALL'} text2={'COLLECTION'} />
          {/* Product solt */}
          <select onChange={(e)=>setsortType(e.target.value)} className=' border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by : Relevant</option>
            <option value="low-high">Sort by : Low-High</option>
            <option value="high-low">Sort by : High-Low</option>
          </select>
        </div>
        {/* Map Product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {

            allproduct.map((item, index) => (
              <Productiteam key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))

          }
        </div>
      </div>
    </div>
  )
}

export default Collection
