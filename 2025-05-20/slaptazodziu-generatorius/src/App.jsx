import { useState } from 'react';
import './App.css'

function App() {
  const [rezultatas, setRezultatas] = useState();
  
  const random = (min, max) => {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Standartinio formos veikimo sustabdymas

    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const data = {};

    for(const input of new FormData(e.target).entries()) {
      data[input[0]] = input[1];
    }

    if(data.digits === 'on') {
      alphabet += '0123456789';
    }

    if(data.symbols === 'on') {
      alphabet += '!@#$%^&*()';
    }

    let result = ''; 

    for(let i = 0; i < data.length; i++) {
      let symbol = alphabet[random(0, alphabet.length - 1)];

      // if(random(0, 1) === 0) {
      //   symbol = symbol.toLowerCase();
      // }

      result += symbol;
    }

    setRezultatas(result);
  }

  return (
    <>
      <div className="container py-5" style={{ maxWidth: 768 }}>
        <h2 className="mb-4">Slaptažodžių generatorius</h2>
        <div className="rezultatas">
          {rezultatas}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center gap-3 justify-content-between mt-3">
              <div className="d-flex align-items-center gap-3">
                <label>Ilgis:</label>
                <input type="number" name="length" className="form-control" />
              </div>
              <div>
                <label className="form-check-label me-3">Skaičiai:</label>
                <input type="checkbox" name="digits" className="form-check-input" />
              </div>
              <div>
                <label className="form-check-label me-3">Simboliai:</label>
                <input type="checkbox" name="symbols" className="form-check-input" />
              </div>
              <div>
                <button className="btn btn-primary">Generuoti</button>
              </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
