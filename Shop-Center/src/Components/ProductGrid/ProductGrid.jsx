import React from "react";
import Card from '../Card/Card.jsx'

const products = [
  {
    image: "https://m.media-amazon.com/images/I/61giwQtR1qL._AC_UY327_FMwebp_QL65_.jpg",
    platform: "Amazon",
    title: "iPhone 16 Pro Max (1 TB) - Desert Titanium",
    rating: 4.5,
    prevPrice: "₹200000",
    currPrice: "₹174000",
    prevPriceDate: "6-Apr-2025",
    dropAmount: "₹26000",
    lastUpdated: "30 minutes ago",
    date: "6-Apr-2025",
  },
  {
    image: "https://m.media-amazon.com/images/I/81vxWpPpgNL._AC_UY327_FMwebp_QL65_.jpg",
    platform: "Flipkart",
    title: "Samsung Galaxy S24 Ultra 5G (512GB) - Titanium Gray",
    rating: 4,
    prevPrice: "₹139999",
    currPrice: "₹124999",
    prevPriceDate: "5-Apr-2025",
    dropAmount: "₹15000",
    lastUpdated: "1 hour ago",
    date: "5-Apr-2025",
  },
  {
    image: "https://m.media-amazon.com/images/I/51aXvjzcukL._AC_UY327_FMwebp_QL65_.jpg",
    platform: "Amazon",
    title: "Sony WH-1000XM5 Wireless Headphones",
    rating: 4.8,
    prevPrice: "₹9598",
    currPrice: "₹4499",
    prevPriceDate: "4-Apr-2025",
    dropAmount: "₹5000",
    lastUpdated: "45 minutes ago",
    date: "4-Apr-2025",
  },
  {
    image: "https://m.media-amazon.com/images/I/51aXvjzcukL._AC_UY327_FMwebp_QL65_.jpg",
    platform: "Amazon",
    title: "Sony WH-1000XM5 Wireless Headphones",
    rating: 4.8,
    prevPrice: "₹9598",
    currPrice: "₹4499",
    prevPriceDate: "4-Apr-2025",
    dropAmount: "₹5000",
    lastUpdated: "45 minutes ago",
    date: "4-Apr-2025",
  },
  // Add more product objects as needed
];

const ProductGrid = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Today's Price Drops</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card key={index} {...product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
