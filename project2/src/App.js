import './App.css'
import React, { useEffect, useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'
import rbnyimg from './images/rbny.png'
import userlogo from './images/user.png'
import scart from './images/cart.png'
import rbb from './images/lgrb.jpg'
import rba from './images/rbaway.jpg'
import rbh from './images/rbhome.jpg'
import ball from './images/rbball.jpg'
import hat from './images/rbbh.jpg'
import jacket from './images/rbj.jpg'
import shorts from './images/rbs.jpg'
import scarf from './images/rbscarf.jpg'
import cap from './images/cap.jpg'
import plush from './images/plush.jpg'
import polo from './images/polo.jpg'
import bottle from './images/rbbottle.jpg'
import kc from './images/rbchain.jpg'
import bp from './images/rbpack.jpg'
import sock from './images/rbsock.png'


function Carousel({ products, title }) {
  const cardsToShow = 5
  const cardWidth = 220
  const [currentIndex, setCurrentIndex] = useState(cardsToShow)
  const [isAnimating, setIsAnimating] = useState(false)
  const trackRef = useRef(null)
  const { addToCart } = useContext(CartContext)

  const extendedProducts = [
    ...products.slice(-cardsToShow),
    ...products,
    ...products.slice(0, cardsToShow),
  ]

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transition = 'none'
      trackRef.current.style.transform = `translateX(-${cardWidth * currentIndex}px)`
    }
  }, [])

  const moveToIndex = (newIndex) => {
    if (trackRef.current && !isAnimating) {
      setIsAnimating(true)
      setCurrentIndex(newIndex)
      trackRef.current.style.transition = 'transform 0.5s ease'
      trackRef.current.style.transform = `translateX(-${cardWidth * newIndex}px)`
    }
  }

  const handleNext = () => {
    if (isAnimating) return
    moveToIndex(currentIndex + 1)
  }

  const handlePrev = () => {
    if (isAnimating) return
    moveToIndex(currentIndex - 1)
  }

  const handleTransitionEnd = () => {
    setIsAnimating(false)
    if (currentIndex >= products.length + cardsToShow) {
      setCurrentIndex(cardsToShow)
      trackRef.current.style.transition = 'none'
      trackRef.current.style.transform = `translateX(-${cardWidth * cardsToShow}px)`
    }
    if (currentIndex <= cardsToShow - 1) {
      const lastRealIndex = products.length + cardsToShow - 1
      setCurrentIndex(lastRealIndex)
      trackRef.current.style.transition = 'none'
      trackRef.current.style.transform = `translateX(-${cardWidth * lastRealIndex}px)`
    }
  }

  return (
    <section className="shop-section">
      <h1>{title}</h1>
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={handlePrev}>
          &lt;
        </button>
        <div className="carousel-window">
          <div
            className="carousel-track"
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{ width: `${extendedProducts.length * cardWidth}px` }}
          >
            {extendedProducts.map((product, index) => (
              <div
                key={`${title}-${index}`}
                className="product-card visible-card"
                style={{ width: '200px', marginRight: '20px' }}
              >
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button className="cart-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
        <button className="arrow right" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>Email: support@rbny.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div className="address-info">
          <h4>Address</h4>
          <p>600 Cape May Street</p>
          <p>Harisson, NJ 07029</p>
        </div>
      </div>
      <div className="trademark">
        &copy; {new Date().getFullYear()} Hugo Carcamo. All rights reserved.
      </div>
    </footer>
  )
}

function App() {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext)

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const topSellers = [
    { id: 1, name: 'Home Jersey', price: '$89.99', image: rbh },
    { id: 2, name: 'Away Jersey', price: '$89.99', image: rba },
    { id: 3, name: 'Fan Scarf', price: '$19.99', image: scarf },
    { id: 4, name: 'Bucket Hat', price: '$19.99', image: hat },
    { id: 5, name: 'RBNY Ball', price: '$9.99', image: ball },
    { id: 6, name: 'Jacket', price: '$79.99', image: jacket },
    { id: 7, name: 'Shorts', price: '$34.99', image: shorts },
  ]

  const newItems = [
    { id: 8, name: 'Backpack', price: '$49.99', image: bp },
    { id: 9, name: 'RBNY Socks', price: '$14.99', image: sock },
    { id: 10, name: 'Water Bottle', price: '$12.99', image: bottle },
    { id: 11, name: 'Keychain', price: '$9.99', image: kc },
    { id: 12, name: 'Polo', price: '$7.99', image: polo },
    { id: 13, name: 'Plush', price: '$19.99', image: plush },
    { id: 14, name: 'Cap', price: '$15.99', image: cap },
  ]

  return (
    <>
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

      <img src={rbb} alt="Background" className="background-image" />

      <div className="hero-text visible">
        <h1 className="line1">“As long as we're breathing..”</h1>
        <h2 className="line2">“From the Garden State to the Empire State..”</h2>
        <button
          className="shop-btn"
          onClick={() => {
            document.querySelector('.shop-section').scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Shop RBNY
        </button>
      </div>

      <Carousel products={topSellers} title="Top Sellers" />
      <Carousel products={newItems} title="New Arrivals" />
      <Footer />
    </>
  )
}

export default App
