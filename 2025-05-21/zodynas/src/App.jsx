import { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [alert, setAlert] = useState({}); 
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {};

    for(const entry of new FormData(e.target).entries()) {
        data[entry[0]] = entry[1];
    }

    // fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + data.word)
    // .then(resp => {
    //   if(resp.status !== 200)
    //     throw Error;

    //   return resp.json();
    // })
    // .then(resp => console.log(resp))
    // .catch(err => console.log(err));

    axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + data.word)
    .then(resp => {
      setAlert({});
      resp.data[0].audio = new Audio(resp.data[0].phonetics[0].audio);

      setData(resp.data[0]);
    })
    .catch(err => setAlert({
      message: err.response.data.message,
      status: 'danger'
    }));
  }

  return (
    <>
      <div className="container py-5" style={{ maxWidth: 768 }}>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="word"
              className="form-control"
              placeholder="Enter the word"
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </form>
        {alert &&
          <div className={'mt-3 alert alert-' + alert.status}>{alert.message}</div>
        }
        {data &&
          <div>
            <div className="d-flex gap-4">
              <div>
                <button 
                  className="btn btn-lg btn-primary"
                  onClick={(e) => data.audio.play()}
                >
                  <i className="bi bi-play-circle"></i>
                </button>
              </div>
              <div>
                <h2>{data.word}</h2>
                <p>{data.phonetics.map((value, index) => <span key={index}>{value.text}</span>)}</p>
              </div>
            </div>
            {data.meanings.map((value, index) =>
              <div key={index}> 
                <h5>{value.partOfSpeech}</h5>
                <ul>
                  {value.definitions.map((row, key) => <li key={key}>{row.definition}</li>)}
                </ul>
              </div>
            )}

          </div>
        }
      </div>
    </>
  )
}

export default App
