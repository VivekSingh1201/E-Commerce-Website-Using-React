import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const categories = [
  {
    name: "Mobiles",
    image: "https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png",
    subcategories: ["Smartphones", "Feature Phones", "Accessories"]
  },
  {
    name: "Fashion",
    image: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png",
    subcategories: ["Men", "Women", "Kids"]
  },
  {
    name: "Electronics",
    image: "https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png",
    subcategories: ["Laptops", "Tablets", "Audio"]
  },
  {
    name: "Home & Furniture",
    image: "https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg",
    subcategories: ["Sofas", "Beds", "Kitchen"]
  },
  {
    name: "Appliances",
    image: "https://rukminim1.flixcart.com/flap/64/64/image/0ff199d1bd27eb98.png",
    subcategories: ["TVs", "Washing Machines", "Refrigerators"]
  },
  {
    name: "Beauty, Toys & More",
    image: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/436cd6fc952ae1cb.png",
    subcategories: ["Toys", "Beauty", "Games"]
  }
];

const Categories = ({ onSearch }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex justify-around bg-white shadow p-4 relative z-10 hidden sm:flex">
      {categories.map((category, index) => (
        <div
          key={index}
          className="text-center relative"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={category.image} alt={category.name} className="mx-auto h-12" />
          <div className="flex items-center justify-center text-sm font-semibold mt-1">
            {category.name} <ChevronDown size={14} className="ml-1" />
          </div>
          {hovered === index && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border rounded shadow-md w-40 text-left outline-none">
              {category.subcategories.map((sub, i) => (
                <div
                  key={i}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={() => onSearch(sub)}
                >
                  {sub}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;