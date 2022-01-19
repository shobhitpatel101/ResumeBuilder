import React from 'react'
import './App.css';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div>
    <Header />
    
    <div className="field">
      <label for="fname">First name:</label><br/>
      <input type="text" id="fname" name="fname" value="John"/>
      <br/>
      <button id="submit">Submit</button>
    </div>

    <Footer />
    </div>
  );
}

export default App;
