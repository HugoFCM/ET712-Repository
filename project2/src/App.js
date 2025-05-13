import './App.css';
import rbnyimg from './images/rbny.png';

function App() {
  return (
  <>
  <header className='header'>
    <section className='logo'>
       <img src={rbnyimg} style={{width:"50px", display:"block", margin:"auto"}}/>
    </section>
    <h3 className='message'>RED RUNS DEEP.</h3>

  </header>
  </>
  );
}

export default App;
