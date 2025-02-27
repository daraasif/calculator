import './App.css';
import { useState } from 'react';



function App() {
  const [result, setResult] = useState("");

  function handleClick(e) {
    setResult(result + e.target.name);
  }

  function clear() {
    setResult('');
  }

  function backSpace() {
    setResult(result.slice(0, -1));
  }

  function calculate(){
    setResult(eval(result));
  }
  return (
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button classname="highlight" onClick={clear}>C</button>
        <button classname="highlight" onClick={backSpace}>CE</button>
        <button classname="highlight" name='/' onClick={handleClick}>/</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button classname="highlight" name='*' onClick={handleClick}>*</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button classname="highlight" name='-' onClick={handleClick}>-</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button classname="add" name='+' onClick={handleClick}>+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button classname="highlight" name='=' onClick={calculate}>=</button>
        
      </div>
      
    </div>
  );
}

export default App;
