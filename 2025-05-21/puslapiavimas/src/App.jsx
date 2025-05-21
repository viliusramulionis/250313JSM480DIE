import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Books from './pages/Books';
import './App.css'

function App() {

  return (
    <>
      {/* Routerių (Maršrutizatorių) galime turėti skirtingų tipų */}
      <BrowserRouter>
        <div className="container">
          {/* Visi Link komponentai turi būti patalpinti BrowserRouter komponento viduje */}
          <Header /> 
          {/* Visi keliai yra registruojami routes komponente */}
          {/* Routes komponente yra talpinami tik ROUTE komponentai */}
          <Routes>
            {/* Route komponentas yra vieno kelio registravimas */}
            <Route path="/" element={<Home />} />
            <Route path="/apie-mus" element={<AboutUs />} />
            <Route path="/kontaktai" element={<Contacts />} />
            <Route path="/knygos/:pavadinimas" element={<Books />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
