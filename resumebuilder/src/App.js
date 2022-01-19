import React from 'react'
import logo from './logo.svg';
import './App.css';
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
    </div>
  );
}

export default App;
