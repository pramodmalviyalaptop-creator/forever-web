import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopcontext'
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
const {search,setSearch,showSearch, setShowsearch }=useContext(ShopContext);
const location=useLocation();
const [visibal,setvisibal]=useState(false)
const {}=useContext(ShopContext)
useEffect(()=>{
      
    const path = location.pathname  

     if( path.includes("collection","/")){
        setvisibal(true);
     }
     else{
        setvisibal(false);
     }
},[location])

  return showSearch && visibal ? (
    <div className=' bg-gray-50 text-center' > 
       <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
           <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search'/>
       
       </div>
       <img className="inline w-5 cursor-pointer"  src={assets.search_icon} alt="" />
    </div>
    
  ) :null
}
export default Searchbar ;
