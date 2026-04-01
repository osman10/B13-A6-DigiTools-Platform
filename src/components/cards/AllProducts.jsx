import React from 'react';
import Card from './Card';

const AllProducts = ({products, selectedProducts, setselectedProducts}) => {
    return (
        <div className='section grid gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center mt-[40px] mb-0 md:mb-[120px]'>
            {products.map((item, index)=>{
                return(
                    <Card item={item} key={index} selectedProducts={selectedProducts} setselectedProducts={setselectedProducts} />
                )
            })}
        </div>
    );
};

export default AllProducts;