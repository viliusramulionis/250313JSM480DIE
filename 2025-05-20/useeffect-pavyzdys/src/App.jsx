import { useState, useEffect } from 'react';
import './App.css'

const App = () => {
  const [rezultatas, setRezultatas] = useState();
  const [skaicius, setSkaicius] = useState(0);

  console.log('Komponentas užkrautas');

  useEffect(() => {
    console.log('UseEffekto veiksmai aktyvuoti');
    // Visos fetch užklausos užsikrovus komponentui bus vykdomos useEffect funkcijoje
    setRezultatas('Labas Pasauli' + Math.random());
  }, [skaicius]); //Antru parametru nuorodomas masyvas kuriame įrašomi state'ai kuriems pasikeitus useEffect'o funkcija bus paleista iš naujo

  return (
    <>
      <h1>{rezultatas}</h1>
      <button onClick={() => setSkaicius(skaicius + 1)}>Mygtukas paspaustas {skaicius} kartų</button>
    </>
  )
}

export default App
