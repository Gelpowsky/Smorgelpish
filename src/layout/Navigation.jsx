// src/layout/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Подключаем стили для навигации

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="logo">
        G e l P
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/products">Бар</Link>
        </li>
        <li>
          <Link to="/cart">Корзина</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
