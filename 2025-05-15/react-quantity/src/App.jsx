import { useState } from 'react';
import './App.css'

function App() {
  const [value, setValue] = useState(1);
  const [message, setMessage] = useState();

  const handleClick = (deduct = false) => {
    if((value <= 0 && deduct) || (value >= 100 && !deduct)) {
      return setMessage('Reikšmė negali būti mažesnė nei nulis arba didesnė nei šimtas');
    } 

    setMessage('');

    if(deduct) {
      setValue(value - 1);
    } else {
      setValue(value + 1);
    }
  }

  const handleChange = (e) => {
    const inputValue = +e.target.value;

    if(inputValue <= 0 || inputValue >= 100) {
      return setMessage('Reikšmė negali būti mažesnė nei nulis arba didesnė nei šimtas');
    } 

    if(Number.isInteger(inputValue)) {
      setValue(inputValue);
    }
  }
  
  return (
    <>
      {message &&
        <div className="alert alert-warning">{message}</div>
      }
      <div className="d-flex">
        <button onClick={() => handleClick(true)}>-</button>
        <input 
          type="text" 
          className="form-control" 
          value={value}
          onChange={handleChange}
        />
        <button onClick={() => handleClick()}>+</button>
      </div>
    </>
  )
}

export default App
