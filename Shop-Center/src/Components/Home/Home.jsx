import React from 'react';
import Header from '../Header/Header.jsx';
import Categories from '../Categories/Categories.jsx';
import ProductGrid from '../ProductGrid/ProductGrid.jsx';
import Footer  from '../Footer/Footer.jsx'; 

const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <ProductGrid />
      <ProductGrid />
      <Footer />
    </>
  );
};

export default Home;