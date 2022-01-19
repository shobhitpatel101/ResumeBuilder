import logo from './logo.svg';
import './App.css';
import Field from './field.js';
import Footer from './footer';
import Header from './header';

function App() {
  /* jsonObject = {
    "fname":"Shivam",
    "lname":"Rajpoot"
  }; */
  return (
    //<field/>
    
    <div className="App">
      <Header/>
      <Field/>
      <Footer/>
    </div>
  );
}

export default App;
