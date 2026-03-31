import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Count from './components/Count';
import Cards from './components/cards/Cards';
import {useState } from 'react';

export const fetchProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};
const productsData = fetchProducts( )


const App = () => {
  const[selectedProducts, setselectedProducts]=useState([])

  return (
    <>
    <Navbar/>
    <Hero/>
    <Count/>
    <Cards productsData={productsData} selectedProducts={selectedProducts} setselectedProducts={setselectedProducts}/>

    </>
  );
};

export default App;