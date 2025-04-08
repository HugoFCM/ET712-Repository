import './App.css';
import User from "./comments"
import "./index.css"
import bati from "./images/bati.png"
import musi from "./images/musi.png"
import musia from "./images/musia.png"

function App() {
  return (
    <>
    <h1>User Comments</h1>
    <main className='maincontainer'>
      <User image={bati} username="Mr. Batman" date="04/01/25" usercomment="Great Job!"/>
      <User image={bati} username="Mr. Batman" date="04/01/25" usercomment="Great Job!"/>
      <User image={bati} username="Mr. Batman" date="04/01/25" usercomment="Great Job!"/>
      </main>

    </>
  );
}

export default App;
