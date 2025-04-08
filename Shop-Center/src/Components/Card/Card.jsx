import React from 'react';
import { Star, StarHalf } from "lucide-react";

const ProductCard = ({
    image="https://m.media-amazon.com/images/I/61giwQtR1qL._AC_UY327_FMwebp_QL65_.jpg",
    platform="Amazon",
    title="Iphone 16 Pro Max (1 TB) - Desert Titanium",
    rating=2.5,
    prevPrice="₹200000",
    currPrice="₹174000",
    prevPriceDate="6-Apr-2025",
    dropAmount="₹26000",
    lastUpdated="30 minutes ago",
    date="6-Apr-2025",
  }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt="{`Image of ${title}`}"
          className="w-full h-64 object-contain p-4"
        />
        {/* Platform Badge */}
        <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-md">
          {platform}
        </div>
        {/* Price Drop Badge */}
        <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-md">
          {dropAmount}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h2>

        {/* Ratings */}
        <div className="flex items-center text-yellow-500 mt-1">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
          {rating % 1 !== 0 && <StarHalf size={16} fill="currentColor" />}
          <span className="ml-1 text-gray-700 text-sm">{rating} stars</span>
        </div>

        {/* Price Info */}
        <div className="flex flex-col space-y-1 mb-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Previous Price</span>
            <span className="text-gray-800 line-through font-medium">{prevPrice}</span>
            <span className="text-gray-400">{date}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Current Price</span>
            <span className="text-green-600 font-bold">{currPrice}</span>
            <span className="text-gray-400">{lastUpdated}</span>
          </div>
        </div>

        {/* Insights Button */}
        <button className="w-full text-sm text-blue-600 font-semibold py-2 border-t border-gray-100 hover:underline" onClick={() => console.log("Price insights for:", title)}>
          Unlock Price Insights
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
