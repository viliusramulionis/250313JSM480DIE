import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState();
  const [nuotrauka, setNuotrauka] = useState();
  const [veisles, setVeisles] = useState([]); //undefined

  console.log('Komponentas yra užkrautas');

  useEffect(() => {
    console.log('Bandome imti duomenis');

    let url = 'https://dog.ceo/api/breeds/image/random';

    if(value) {
      url = `https://dog.ceo/api/breed/${value}/images/random`;
    }

    fetch(url)
    .then(resp => resp.json())
    .then(resp => {
      if(resp.status === 'success') {
        setNuotrauka(resp.message);
      } else {
        setNuotrauka(false);
      }
    });
  }, [value]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(resp => {
      const data = [];

      for(const value of Object.entries(resp.message)) {
        if(value[1].length > 0) {
          for(let x = 0; x < value[1].length; x++) {
            data.push(value[0] + ' ' + value[1][x]);
          }
        } else {
          data.push(value[0]);
        }
      }

      setVeisles(data);
    });
  }, []);

  const handleSelect = (e) => {
    // fetch(`https://dog.ceo/api/breed/${value.replaceAll(' ', '/')}/images/random`)
    // .then(resp => resp.json())
    // .then(resp => {
    //   if(resp.status === 'success') {
    //     setNuotrauka(resp.message);
    //   } else {
    //     setNuotrauka(false);
    //   }
    // });

    setValue(e.target.value.replaceAll(' ', '/'));
  }

  return (
    <>
      <div className="container" style={{ maxWidth: 768 }}>
        <div>
          <input 
            type="text" 
            className="form-control mb-3" 
            placeholder="Enter dog breed" 
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <select 
            className="form-select mb-3" 
            onChange={handleSelect}
          >
            <option>Select a breed</option>
            {veisles.map((value, index) => <option key={index}>{value}</option>)}
          </select>
        </div>
        {nuotrauka && 
          <img src={nuotrauka} alt="" style={{ maxWidth: '100%'}} />
        }
      </div>
    </>
  )
}

export default App
