import logo from './logo.svg';
import './App.css';
import field from './field.js';

function App() {
  return (
    //<field/>
    <div className="field">
      <label for="fname">First name:</label><br/>
      <input type="text" id="fname" name="fname" value="John"/>
      <br/>
      <button id="submit">Submit</button>
    </div>
  );
}

export default App;
