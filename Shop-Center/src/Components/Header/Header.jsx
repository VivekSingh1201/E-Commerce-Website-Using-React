import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        ShopCenter
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
        </Link>
        <Link to="/login" className="text-sm font-medium hover:text-indigo-600">
          Login
        </Link>
        <Link to="/register" className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
