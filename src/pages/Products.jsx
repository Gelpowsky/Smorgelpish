// src/pages/Products.js
import React, { useState } from 'react';
import SmorCard from '../components/SmorCard'; // Импорт компонента SmorCard
import smr1 from './img/smr1.png'; // Импорт изображения
import { useCart } from '../context/CartContext'; // Импортируем контекст корзины
import './Product.css'

const Products = () => {
  // Состояние для списка товаров
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'SMORGELPISH',
      img: smr1,
      alt: 'Описание изображения',
      description: 'Улетаем на смородиновую планету',
      price: 500,
      quantity: 1,
    },
    {
      id: 2,
      name: 'NEW YEAR STYLE',
      img: smr1,
      alt: 'Новогодняя смородина',
      description: 'Наполняем нашу смородиновую планету новогодним вайбом',
      price: 600,
      quantity: 1,
    },
  ]);

  // Получаем метод addToCart из контекста корзины
  const { addToCart } = useCart();

  // Функция для изменения количества товара
  const updateQuantity = (id, action) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: action === 'increment'
                ? product.quantity + 1
                : product.quantity - 1 > 0
                ? product.quantity - 1
                : 1,
            }
          : product
      )
    );
  };

  return (
    <div>
      <h1>Попробуй новый вкус</h1>
      <div className="products-list">
        {products.map((product) => (
          <SmorCard
            key={product.id}
            product={product}
            updateQuantity={updateQuantity} // Передаем функцию обновления количества товара
            addToCart={addToCart} // Передаем функцию добавления товара в корзину
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
