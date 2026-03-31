import React, { use, useState } from 'react';
import CardTitle from './CardTitle';
import AllProducts from './AllProducts';
import SelectedProducts from './SelectedProducts';

const Cards = ({productsData, selectedProducts, setselectedProducts}) => {
    const products = use(productsData)
  

    const [activeBtn, setActiveBtn] = useState("product");
    return (
        <div>
            <CardTitle activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
            
            {activeBtn==="product" ? <AllProducts products={products} selectedProducts={selectedProducts} setselectedProducts={setselectedProducts} /> : <SelectedProducts/>}
        </div>
    );
};

export default Cards;