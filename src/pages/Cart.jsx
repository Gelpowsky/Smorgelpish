// src/pages/Cart.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CheckoutForm from '../components/CheckoutForm';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, getTotalAmount } = useCart();
  const [isCheckoutFormVisible, setCheckoutFormVisible] = useState(false);

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const handleFormSubmit = (formData) => {
    alert(`Заказ отправлен! Имя: ${formData.name}, Телеграм: ${formData.telegram}`);
    setCheckoutFormVisible(false);
  };

  return (
    <div className="cart">
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty-message">Увы, но ты ничего не заказал в нашем баре!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                className="cart-item-img"
                src={item.img || '/default-image.jpg'}
                alt={item.name}
              />
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-quantity">Количество: {item.quantity}</span>
              <span className="cart-item-total">
                Общая сумма: {(item.price * item.quantity).toLocaleString('ru-RU', {
                  style: 'currency',
                  currency: 'RUB',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
              <button onClick={() => handleRemove(item.id)}>Удалить</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>
              Итоговая сумма:{' '}
              {getTotalAmount().toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h3>
          </div>
          <button
            className="checkout-button"
            onClick={() => setCheckoutFormVisible(!isCheckoutFormVisible)}
          >
            Оформить заказ
          </button>
          {isCheckoutFormVisible && <CheckoutForm onSubmit={handleFormSubmit} />}
        </div>
      )}
    </div>
  );
};

export default Cart;
