import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Checkout from './Checkout'
import Cart from './Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './CartContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </Router>
  </React.StrictMode>
)
