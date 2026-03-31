import React, { useState } from 'react';

const CardTitle = ({activeBtn, setActiveBtn}) => {
  

    return (
        <div className='mt-[120px]'>
            <h1 className='text-center text-5xl font-extrabold mb-3'>Premium Digital Tools</h1>
            <p className='text-center text-gray-400 text-base'>Choose from our curated collection of premium digital products designed <br />
                to boost your productivity and creativity.</p>
            <div className='flex justify-center  mx-auto mt-4'>
                <button className={`py-3 px-5 rounded-full font-bold ${activeBtn === "product" ? 'gradient text-white' : 'bg-none'}`} onClick={() => setActiveBtn("product")}>Products</button>
                <button className={`py-3 px-5 rounded-full font-bold ${activeBtn === "cart" ? 'gradient text-white' : 'bg-none'} `} onClick={() => setActiveBtn("cart")}>Cart(2)</button>
            </div>
        </div>
    );
};

export default CardTitle;