import './App.css';
import User from "./comments";
import "./index.css";
import User_feedback from './feedback';
import bati from "./images/bati.png";
import musi from "./images/musi.png";
import musia from "./images/musia.png";

function App() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <>
      <h1>User Comments</h1>
      <main className='maincontainer'>
        <User_feedback><User image={bati} username="Batman" date="04/01/25" usercomment="Great Job!" /></User_feedback>
        <User_feedback><User image={musi} username="Yo" date="04/01/25" usercomment="I need more rest!" /></User_feedback>
        <User_feedback><User image={musia} username="Ye" date="04/01/25" usercomment="Glad to!" /></User_feedback>
      </main>

      <div>
        <button onClick={() => handleClick('Hello from React!')}>Click Me</button>
      </div>
    </>
  );
}

export default App;
