import './App.css';
import rbnyimg from './images/rbny.png';
import userlogo from './images/user.png';
import scart from './images/cart.png';
import rbb from './images/lgrb.jpg';

function App() {
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

<div className="hero"></div>  

    </>
  );
}

export default App;
