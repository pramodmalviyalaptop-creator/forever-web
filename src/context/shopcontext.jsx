import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext ();


const ShopContextProvider=(props)=>{

    const currency ="$" ;
    const delivery_fee=10;
    const [search,setSearch]=useState('');
    const [showSearch,setShowsearch]=useState(true)
    const [carditems,setcarditems]=useState({})
    const navigata = useNavigate()

    const addToCart = async(itemId,size)=>{

    if (!size) {
        toast.error('select Product size ')
        return
    }

    let cartdata = structuredClone(carditems);
        
    if (cartdata[itemId]) {
        if (cartdata[itemId][size]) {
            cartdata[itemId][size] += 1  // FIX
        }
        else{
            cartdata[itemId][size] = 1
        }
    }
    else{
        cartdata[itemId] = {};
        cartdata[itemId][size] = 1 // FIX
    }
    setcarditems(cartdata);
}

   const getcartcount = ()=>{
  let totalcount = 0;

  for (const id in carditems) {
    for(const size in carditems[id]) {
      if (carditems[id][size] > 0) {
        totalcount += carditems[id][size];
      }
    }
  }
  return totalcount;
}
    
    const updatequantity= async(itemId,size,quantity)=>{

        let cartdata = structuredClone(carditems)
        cartdata[itemId][size]=quantity;
        setcarditems(cartdata);
    }

    const getcarttotal =  ()=>{
        let totalamount = 0 ;
        for( const items in carditems ){
            let iteminfo=products.find((product)=>product._id === items );
            for (const item in carditems[items]){
                try {
                    if (carditems[items][item]>0) {
                         totalamount +=iteminfo.price * carditems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalamount ;
    }

    const value={
        products,currency,delivery_fee,
        search,setSearch,showSearch,setShowsearch,
        carditems,addToCart,getcartcount,updatequantity,getcarttotal,
        navigata,
    }

    useEffect(()=>{
       console.log(carditems)
    },[carditems])
   
    return(
        <ShopContext.Provider value={value}>
         {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;