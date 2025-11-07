import React from "react";
import Title from "../components/titel";
import { assets } from "../assets/frontend_assets/assets";
import Newslatterbox from "../components/Newslatterbox";

const About =()=>{

return (
  <div>
     
    <div className="text-2xl text-center pt-8 border-t ">
         <Title text1={"ABOUT"} text2={"US"}/>
    </div> 
    <div className="my-10 flex flex-col sm:flex-row gap-16">
     <img className=" w-full sm:max-w-[450px]" src={assets.about_img} alt="" />
     <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
      <p>Forever Clothing is more than just a fashion brand, it is a lifestyle with confidence, creativity and personality. We believe that clothing should feel comfortable, look stylish and truly represent who you are every day. Each piece is selected with care, inspired by modern trends, everyday essentials and timeless classics. Our goal is to make fashion accessible, affordable and long-lasting for everyone. From casual wear to statement outfits, we focus on quality fabrics, perfect fitting and fresh designs. Forever Clothing stands for self-expression, positivity and style that never fades — clothing that stays with you forever.</p>
      <p>Since our beginning, Forever Clothing has been built around one simple idea — fashion should feel good, look good and last longer. We started with small drops, simple designs and everyday fits, and slowly grew into a brand inspired by street culture, modern trends and timeless styling. Our focus is to give customers quality fabrics, clean cuts and wearable styles that work in real life — not just in pictures. We believe clothes are not just outfits, they are personality. Forever Clothing represents comfort, confidence and creativity — styles that stay with you, forever.</p>
      <b className="text-gray-800">Our Mission </b>
      <p>Our mission is to make fashion simple, affordable and lasting for everyone.</p>
        </div>
    </div>
    <div className="text-2xl py-4 ">
      <Title text1={"WHY"} text2={"choose us"}/>
    </div>
     <div className="flex flex-col md:flex-row text-sm mb-20 ">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
         <b>Quality Assurance :</b>
         <p className="text-gray-600">At Forever Clothing, quality is not a feature, it is a standard we refuse to compromise. Every fabric.it is a standard we refuse to compromise. Every fabric .</p>
           <b>Convenience:</b>
         <p className="text-gray-600" >with our sevice quality is not a feature, it is a standard we refuse to compromise. Every fabric.it is a standard .</p>
          <b>Exceptional Customer Service:</b>
         <p className="text-gray-600" > our sevice quality is not a feature, it is a standard we refuse to compromise. Every fabric.it is a standard .</p>
      </div>
   
     </div>
    <Newslatterbox/>
  </div>
    
  
)

}

export default About;