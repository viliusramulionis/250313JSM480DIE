import { useState } from 'react';
import Button from './components/button/Button';
import Link from './components/link/Link';
import StyledButton from './components/styled-button/StyledButton';
import './App.css'

function App() {
  const [text, setText] = useState('Labas Pasauli');

  console.log('App Komponentas yra sukurtas');

  const handleClick = () => {
    setText('Sveiki visi');

    console.log('Veikia');
  }

  return (
    <>
      <h2>Pirmas pavyzdys:</h2>
      <h3>{text}</h3>
      <button onClick={handleClick}>Keisti pasisveikinimą</button>
      
      <h2>Antras pavyzdys:</h2>

      <Button text="Pirmas mygtukas" />
      <Button text="Antras mygtukas" />
      <Button text="Trečias mygtukas" />

      <h3>Trecias pavyzdys:</h3>
      <Link text="Nuoroda" />

      <h3>Ketvirtas pavyzdys:</h3>
      <StyledButton text="Keisti pasisveikinimą" setText={setText} />
    </>
  )
}

export default App
