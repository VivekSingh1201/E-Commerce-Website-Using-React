import React from 'react';
import Header from './Components/Header/Header.jsx';
import Categories from './Components/Categories/Categories.jsx';
import ProductGrid from './Components/ProductGrid/ProductGrid.jsx';
import Footer  from './Components/Footer/Footer.jsx'; 

const Layout = () => {
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

export default Layout;
