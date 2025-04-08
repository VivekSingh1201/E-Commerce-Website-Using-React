import React, { useState } from 'react';
import Card from '../Card/Card.jsx'

const PaginatedProductList = ({ products, itemsPerPage = 6 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border text-sm disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-3 py-1">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border text-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedProductList;
