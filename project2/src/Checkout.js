import React, { useState } from 'react';

function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed! Thank you, ' + formData.name);
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 20, backgroundColor: '#fff', borderRadius: 8 }}>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name<br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
          />
        </label>
        <label>
          Email<br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
          />
        </label>
        <label>
          Address<br />
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows={3}
            style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
          />
        </label>
        <label>
          Card Number<br />
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            maxLength={16}
            style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
          />
        </label>
        <button type="submit" style={{ padding: '12px 20px', backgroundColor: 'crimson', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
