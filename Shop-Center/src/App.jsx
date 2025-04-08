import './App.css'
import { useState,React } from 'react'
import Header from './Components/Header/Header.jsx'
import Card from './Components/Card/Card.jsx'
import ProductGrid from './Components/ProductGrid/ProductGrid.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfiniteCard from './Components/PaginatedProductList/InfiniteCard.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InfiniteCard />} />
      </Routes>
    </Router>
  );
};

export default App;