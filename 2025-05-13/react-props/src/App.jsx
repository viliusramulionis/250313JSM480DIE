import Button from './button/Button'
import Card from './card/Card';
import products from './products';
import './App.css'

function App() {
  console.log(products);

  const korteles = [
    {
      pavadinimas: "Taiwan ex-president Tsai Ing-wen to visit UK as China ratchets up threats against Taipei", 
      aprasymas: "Former leader had been due to visit in October but trip was cancelled when it coincided with David Lammy's trip to Beijing."
    },
    {
      pavadinimas: "Diplomatic spat ignites as Poland accuses Russia of sabotage",
      aprasymas: "Russian ambassador summoned, consulate closed, as probe confirms Moscow's involvement in Warsaw shopping centre fire."
    }, 
    {
      pavadinimas: "EIC Board calls for national and regional synergies to boost deep tech innovation",
      aprasymas: "The European Innovation Council (EIC) Board has called on Member States and regions to unlock the full potential of their national and..."
    }
  ];

  return (
    <>
     <h1>Labas Pasauli</h1>
     {/* JSX'e atributai yra vadinami propsais (props) */}
     <div className="d-flex gap-3">
      <Button tekstas="Kainos" klase="primary" />
      <Button tekstas="Akcijos" klase="warning" />
      <Button tekstas="Nuolaidos" klase="danger" />
     </div>
     <div className="pt-5">
        <Card />
        <Card data={{ pavadinimas: "Labas Pasauli", aprasymas: "Labai idomus tekstas" }} />
     </div>
     <div className="pt-5">
        {/* {korteles.map(value => {
          return (
            <Card data={value} />
          );
        })} */}

        {/* JEIGU GAVOTE KLAIDĄ: Each child in a list should have a unique "key" prop. */}
        {/* Nurodykite key propsą prie pagrindinio elemento sąraše */}

        {korteles.map((value, index) => <Card key={index} data={value} />)}
     </div>
    </>
  )
}

export default App
