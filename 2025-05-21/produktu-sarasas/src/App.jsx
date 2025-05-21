import { useState, useRef } from 'react';
import './App.css'

const App = () => {
  const [data, setData] = useState([]); 
  // useRef hooką (funckiją) naudojame siekiant sukurti nuorodą iki pasirinkto elemento komponente
  const inputRef = useRef();

  console.log('Komponentas užkrautas');

  const handleSubmit = (e) => {
    e.preventDefault();

    setData([...data, inputRef.current.value]);

    // Išvalo formą:
    // e.target.reset();

    inputRef.current.value = '';
  }

  return (
    <>
      <div className="container py-5" style={{ maxWidth: 768 }}>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Įveskite produktą"
              ref={inputRef}
            />
            <button className="btn btn-primary">Pridėti</button>
          </div>
        </form>
        <ul className="list-group mt-3">
          {data.map((value, index) => 
            <li key={index} className="list-group-item">{value}</li>
          )}
        </ul>
      </div>
    </>
  )
}

export default App
