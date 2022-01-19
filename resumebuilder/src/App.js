import React from 'react'
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Header from './header';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
     
      <Footer />
=======
import field from './field.js';

function App() {
  return (
    //<field/>
    <div className="field">
      <label for="fname">First name:</label><br/>
      <input type="text" id="fname" name="fname" value="John"/>
      <br/>
      <button id="submit">Submit</button>
>>>>>>> 01b49acc1260dbd499ead66b9303d8dc0eee4a94
    </div>
  );
}

export default App;
