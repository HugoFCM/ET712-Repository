import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import rbnyimg from './images/rbny.png';
import userlogo from './images/user.png';
import scart from './images/cart.png';
import rbb from './images/lgrb.jpg';

function App() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const shopRef = useRef(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToShop = () => {
    if (shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className='header'>
        <section className='logo'>
          <img src={rbnyimg} alt="RBNY Logo" />
        </section>

        <h3 className='message'>RED RUNS DEEP.</h3>

        <div className='spacer'></div>

        <div className='icon-section'>
          <img src={scart} alt="Cart" className='icon' />
          <div className='divider'></div>
          <img src={userlogo} alt="User" className='icon' />
        </div>
      </header>

      <img
        src={rbb}
        alt="Background"
        className={`background-image ${hovered ? 'bright' : ''}`}
      />

      <div className={`hero-text${visible ? ' visible' : ''}`}>
        <h1 className="line1">“As long as we're breathing..”</h1>
        <h2 className="line2">“From the Garden State to the Empire State..”</h2>
        <button
          className="shop-btn"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={scrollToShop}
        >
          Shop RBNY
        </button>
      </div>

      <section className="shop-section" ref={shopRef}>
        <h1>Top Sellers</h1>
      
      </section>
    </>
  );
}

export default App;
