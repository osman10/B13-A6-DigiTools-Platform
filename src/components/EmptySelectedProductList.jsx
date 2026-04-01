import { AiOutlineShoppingCart } from "react-icons/ai";

const EmptySelectedProductList = () => {
    return (
        <div className='section p-10 border border-gray-200 rounded-3xl h-[500px] flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold mb-3 text-gray-400'>Your Cart is Empty</h1>
            <p className='text-[100px] font-bold mb-3 text-gray-400'> <AiOutlineShoppingCart /></p>
            <p className='text-xl font-bold mb-3 text-gray-400'>Go to product section and add products.</p>

        </div>
    );
};

export default EmptySelectedProductList;