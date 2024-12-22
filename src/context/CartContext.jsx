// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

// Создаем контекст корзины
const CartContext = createContext();

// Хук для использования корзины
export const useCart = () => {
  return useContext(CartContext);
};

// Провайдер корзины
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Добавление товара в корзину
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product }];
      }
    });
  };

  // Удаление товара из корзины
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Получение общей суммы корзины
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
