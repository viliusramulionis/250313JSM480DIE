import Header from './components/header/Header';
import './App.css'

function App() {
  const vardas = 'Jonas Jonaitis';

  // Kiekvienas komponentas grąžina atgal tik vieną (tėvinį) jsx elementą
  return (
    // Jeigu turime kelis elementus juos galime apgliaubti į fragmentą tam, jog išvengti klaidos. 
    // Kiekvienas atributas JSX vadinamas propsu (prop)
    // Skirtingai nei template literals variante, dolerio ženklas JSX'e nėra rašomas norint atvaizduoti reiškmę
    <>
      {/* Komponento priskyrimas dokumente */}
      <Header />
      <div className="intro">
        <h1>Sveiki, {vardas}</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sed!</h2>
        <p style={{ fontStyle: 'italic' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi eaque atque facilis commodi, facere vitae voluptates voluptas aliquam illum exercitationem dicta labore id sit, obcaecati fugit eveniet optio accusantium qui quo maxime! Nobis ad deserunt expedita illum ratione consectetur, tenetur aut sint facere eaque? Accusamus distinctio autem eum placeat.</p>
        <p>Aritmetinis veiksmas: {15 + 2400}</p>
      </div>
    </>
  );

  // Komponentai naudojami tam, kad būtų priskirti ne vieną kartą (Reusability)
}

export default App
