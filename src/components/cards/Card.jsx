import React, { useState } from 'react';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

const Card = ({item, selectedProducts, setselectedProducts}) => {
    const[buyNow, setBuyNow]=useState("Buy Now");

    const handleBuyNow =(item)=>{
    // check already add
      const alreadyAdded = selectedProducts.find(element => element.id === item.id);
      
      if(alreadyAdded){
        toast.error("Already added to cart.")
      }else{
        setBuyNow("Added to Cart")
        setselectedProducts([...selectedProducts, item])
        toast("Item added successfully.")
      }
    }


    return (

      <div className="flex flex-col justify-between max-w-[380px] min-h-[414px] bg-white rounded-2xl overflow-hidden hover:shadow-md transition duration-300 p-4 border border-gray-300">
       <div className='flex justify-end'>
         <p
            className={`rounded-full px-2 w-fit
              ${item.productCatagory === "Popular" && "bg-violet-200 text-violet-600"}
              ${item.productCatagory === "New" && "bg-green-200 text-green-600"}
              ${item.productCatagory === "Best Seller" && "bg-yellow-200 text-yellow-600"}
            `}>
              {item.productCatagory}
          </p>
       </div>
       <div className='w-[60px] h-[60px] flex justify-center items-center rounded-full border-[0.5px] border-gray-200'>
            <img src={item.productImg} alt="card"/>
       </div>
        <h1 className='text-2xl text-[#101727] mt-4 font-bold'>{item.productTitle}</h1>
        <p className='mt-5 mb-5 text-gray-500'>{item.productDescription}</p>
        <p className='font-bold text-2xl mb-4'>${item.productPrice}<span className='text-[#627382] text-base font-normal'>/{item.productTime}</span></p>

        {item.productFeature.map((feature, index)=>{
            return(
                <p key={index} className='flex items-center gap-2 text-gray-500'><IoCheckmarkOutline className='text-green-500 font-bold text-xl' />{feature}</p>
            )
        })}

          <button onClick={()=>handleBuyNow(item)} className="gradient mt-4  text-white text-base font-bold py-4 rounded-full hover:bg-blue-600 transition">
            {buyNow}
          </button>
        </div>


    );
};
export default Card;