// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './layout/Navigation';
import Products from './pages/Products';
import Cart from './pages/Cart';
import './App.css';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navigation />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<div className="home"><h1>Добро пожаловать в магазин GelP!</h1></div>} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
