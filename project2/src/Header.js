import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'
import rbnyimg from './images/rbny.png'
import userlogo from './images/user.png'
import scart from './images/cart.png'

function Header() {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext)
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="header">
      <section className="logo">
        <img src={rbnyimg} alt="RBNY Logo" />
      </section>
      <h3 className="message">RED RUNS DEEP.</h3>
      <div className="spacer"></div>
      <div className="icon-section">
        <div
          onClick={() => navigate('/cart')}
          style={{ cursor: 'pointer', position: 'relative' }}
        >
          <img src={scart} alt="Cart" className="icon" />
          {totalQuantity > 0 && (
            <span
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: 'crimson',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 7px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                userSelect: 'none',
              }}
            >
              {totalQuantity}
            </span>
          )}
        </div>
        <div className="divider"></div>
        <img src={userlogo} alt="User" className="icon" />
      </div>
    </header>
  )
}

export default Header
