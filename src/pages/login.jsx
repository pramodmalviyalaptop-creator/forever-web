import React, { useState } from 'react'

const Login = () => {

  const [currentstate,setcurrentstate]=useState('singin')
  const onSubmitHandler = async (event) => {
  event.preventDefault()
  }
  return (
    <div>
       <form onSubmit={onSubmitHandler}className='flex flex-col items-center w-[90% ]sm:max-w-96 m-auto mt-14 gap-5 text-gray-800' >
         <div className="inline-flex items-center gap-2 mb-2 mt-10 ">
          <p className='prata-regular text-3xl'>{currentstate}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
         </div>
         {currentstate === 'login'? '' :<input type="text" className='px-3 py-2 border border-gray-800' placeholder='Name' required />}
         <input type="text" className=' px-3 py-2 border border-gray-800' placeholder='Email' required />
         <input type="text" className=' px-3 py-2 border border-gray-800' placeholder='Password' required />
         <p className=' text-gray-400 cursor-pointer'>Forgot your password ?</p>
         {
          currentstate === "login" 
          ? <p onClick={()=>setcurrentstate('sing up')} className="cursor-pointer"> Creat Account</p>
          : <p onClick={()=>setcurrentstate('login')} className='cursor-pointer'>Login here</p>
         }
         <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentstate === 'login' ? 'Sing In' : 'Sing Up '}</button>
       </form>
   
    </div>
  )
}

export default Login
