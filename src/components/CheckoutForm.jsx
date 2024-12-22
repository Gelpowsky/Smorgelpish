// src/components/CheckoutForm.js
import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', telegram: '' });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', telegram: '' });
  };

  return (
    <form className="checkout-form" onSubmit={handleFormSubmit}>
      <h2>Форма оформления заказа</h2>
      <label>
        Имя:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        Телеграм:
        <input
          type="text"
          name="telegram"
          value={formData.telegram}
          onChange={handleFormChange}
          required
        />
      </label>
      <button type="submit">Отправить форму</button>
    </form>
  );
};

export default CheckoutForm;
