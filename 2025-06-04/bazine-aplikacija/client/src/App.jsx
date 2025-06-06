import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './components/header/Header'
import Home from './pages/Home';
import AddFunds from './pages/AddFunds';
import DeductFunds from './pages/DeductFunds';
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-funds" element={<AddFunds />} />
            <Route path="/deduct-funds" element={<DeductFunds />} />
          </Routes>
        </div>
        <h1>Labas Pasauli</h1>
      </BrowserRouter>
    </>
  )
}

export default App
