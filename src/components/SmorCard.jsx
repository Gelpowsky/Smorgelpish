// src/components/SmorCard.jsx
import React from 'react';
import './SmorCard.css'; // Импортируем файл стилей

const SmorCard = ({ product, updateQuantity, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.alt} className="product-img" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <div className="quantity-controls">
        <button 
          onClick={() => updateQuantity(product.id, 'decrement')} 
          disabled={product.quantity <= 1} // Отключаем кнопку "-", если количество товара равно 1
        >
          -
        </button>
        <span className="quantity-display">{product.quantity}</span> {/* Отображаем количество */}
        <button 
          onClick={() => updateQuantity(product.id, 'increment')}
        >
          +
        </button>
      </div>

      <p>Цена: {product.price} руб.</p>

      {/* Кнопка добавления товара в корзину */}
      <button 
        onClick={() => addToCart(product)} 
        className="add-to-cart-btn"
      >
        Добавить в корзину
      </button>
    </div>
  );
};

export default SmorCard;
