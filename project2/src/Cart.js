import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const subtotal = cartItems.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace('$', ''));
    return sum + priceNum * item.quantity;
  }, 0);

  const salesTax = subtotal * 0.0816;
  const total = subtotal + salesTax;

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', padding: 20, backgroundColor: '#fff', borderRadius: 8 }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table style={{ width: '100%', marginBottom: 20, borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Product</th>
                <th style={{ borderBottom: '1px solid #ddd' }}>Price</th>
                <th style={{ borderBottom: '1px solid #ddd' }}>Quantity</th>
                <th style={{ borderBottom: '1px solid #ddd' }}>Total</th>
                <th style={{ borderBottom: '1px solid #ddd' }}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => {
                const priceNum = parseFloat(item.price.replace('$', ''));
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>${priceNum.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={e => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        style={{ width: 50 }}
                      />
                    </td>
                    <td>${(priceNum * item.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={() => removeFromCart(item.id)} style={{ cursor: 'pointer' }}>
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div style={{ textAlign: 'right', fontSize: '1.2rem' }}>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Sales Tax (8.16%): ${salesTax.toFixed(2)}</p>
            <p><strong>Total: ${total.toFixed(2)}</strong></p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
