import React from 'react';
import { toast } from 'react-toastify';

const SelectedProductList = ({selectedProducts, setselectedProducts}) => {
// total price
const totalPrice = selectedProducts.reduce((sum, item)=> sum + item.productPrice, 0);
// deleted item
const deleteItem =(item)=>{
    const filteredArray = selectedProducts.filter(element => element.id !== item.id)
    setselectedProducts(filteredArray)
    toast("Item deleted successfully.")
}
// make payment and empty cart
const makePayment =()=>{
    setselectedProducts([])
    toast("Payment successfull")
}

    return (
        <div className='section p-10 border border-gray-200 rounded-3xl'>
            <p className='text-2xl font-bold mb-3'>Your Cart</p>
            <div className='flex flex-col gap-3'>
                {selectedProducts.map((item, index)=>{
                    return(
                        <div key={index} className='p-4 rounded-2xl bg-gray-100'>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-4'>
                                    <div className='h-[60px] w-[60px] rounded-full flex items-center justify-center bg-white'>
                                        <img src={item.productImg} alt={item.productImg} />
                                    </div>
                                    <div>
                                        <p className='text-xl font-semibold'>{item.productTitle}</p>
                                        <p className='text-[#627382] text-base'>${item.productPrice}</p>
                                    </div>
                                </div>
                                <div><button onClick={()=>deleteItem(item)} className='text-pink-400 font-bold cursor-pointer hover:text-pink-500 transition'>Remove</button></div>

                            </div>
                        </div>
                    )
                })}
              <div className='flex justify-between m-3'>
                <p className='text-gray-400'>Total</p>
                <p className='text-xl font-bold'>${totalPrice}</p>
              </div>
              <button onClick={makePayment} className='gradient w-full p-3 text-white font-black rounded-full hover:text-gray-200 transition cursor-pointer'>Proceed to checkout</button>
            </div>

        </div>
    );
};

export default SelectedProductList;