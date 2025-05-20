import { useState } from 'react';
import './App.css'

function App() {
  const [pirmas, setPirmas] = useState(''); 
  const [antras, setAntras] = useState('');
  const [veiksmas, setVeiksmas] = useState(); //undefined
  const [rezultatas, setRezultatas] = useState(); //undefined

  const handleDigit = (e) => {
    // console.log(typeof e.target.textContent, typeof +e.target.textContent);

    if(veiksmas) {
      setAntras(antras + e.target.textContent);
    } else {
      setPirmas(pirmas + e.target.textContent);
    }
  }

  const handleAction = (e) => {
    setVeiksmas(e.target.textContent);
  }

  const handleResult = (e) => {
    if(veiksmas === '+') {
      setRezultatas(parseInt(pirmas) + parseInt(antras));
    }

    if(veiksmas === '-') {
      setRezultatas(pirmas - antras);
    }

    if(veiksmas === '*') {
      setRezultatas(pirmas * antras);
    }

    if(veiksmas === '/') {
      setRezultatas(pirmas / antras);
    }
  }

  const handleReset = (e) => {
    setPirmas('');
    setAntras('');
    setVeiksmas(false);
    setRezultatas(false);
  }

  return (
    <>
      <div className="container" style={{ maxWidth: 768 }}>
        <h1 className="text-center py-5">Skaiciuotuvas</h1>
        <div className="pb-4 text-center fs-4">
          {pirmas} {veiksmas} {antras} {rezultatas && '=' } {rezultatas} 
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-wrap justify-content-center">
              <button className="btn btn-light button" onClick={handleDigit}>7</button>
              <button className="btn btn-light button" onClick={handleDigit}>8</button>
              <button className="btn btn-light button" onClick={handleDigit}>9</button>
              <button className="btn btn-light button" onClick={handleDigit}>4</button>
              <button className="btn btn-light button" onClick={handleDigit}>5</button>
              <button className="btn btn-light button" onClick={handleDigit}>6</button>
              <button className="btn btn-light button" onClick={handleDigit}>1</button>
              <button className="btn btn-light button" onClick={handleDigit}>2</button>
              <button className="btn btn-light button" onClick={handleDigit}>3</button>
              <button className="btn btn-warning button" onClick={handleReset}>C</button>
              <button className="btn btn-light button" onClick={handleDigit}>0</button>
              <button 
                className="btn btn-primary button" 
                onClick={handleResult}
              >=</button>
          </div>
          <div>
              <button 
                className="btn btn-outline-secondary action-button"
                onClick={handleAction}
              >/</button>
              <button 
                className="btn btn-outline-secondary action-button"
                onClick={handleAction}
              >*</button>
              <button 
                className="btn btn-outline-secondary action-button"
                onClick={handleAction}
              >-</button>
              <button 
                className="btn btn-outline-secondary action-button"
                onClick={handleAction}
              >+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
