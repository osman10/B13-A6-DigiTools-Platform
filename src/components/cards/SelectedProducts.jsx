import React from 'react';
import SelectedProductList from '../SelectedProductList';
import EmptySelectedProductList from '../EmptySelectedProductList';

const SelectedProducts = ({selectedProducts, setselectedProducts }) => {

    return (
        <div className='section'>
           {selectedProducts.length > 0 ? <SelectedProductList selectedProducts={selectedProducts} setselectedProducts={setselectedProducts}/> : <EmptySelectedProductList/>}
        </div>
    );
};

export default SelectedProducts;