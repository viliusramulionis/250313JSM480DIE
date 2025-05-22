import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Meal from './pages/Meal';
import AuthContext from './context/AuthContext';
import './App.css'

const App = () => {
  // Jeigu vartotojas neprisijunges:
  // const user = false;

  // Jeigu autentifikuotas:
  const user = {
      id: 1,
      name: 'Jonas',
      image: 'https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_jakesully_16x9_1098_02_b13c4171.jpeg?region=0%2C0%2C1920%2C1080'
  }
  
  return (
    <>
      <AuthContext.Provider value={user}>
        <BrowserRouter>
          <Header />
            <main className="container pt-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/meal/:id" element={<Meal />} />
              </Routes>
            </main>
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  )
}

export default App
