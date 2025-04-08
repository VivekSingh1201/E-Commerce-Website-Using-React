import React from 'react';
import PaginatedProductList from './PaginatedProductList';
import { dummyProductList } from './data'; 

const ProductPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <PaginatedProductList products={dummyProductList} />
    </div>
  );
};

export default ProductPage;
