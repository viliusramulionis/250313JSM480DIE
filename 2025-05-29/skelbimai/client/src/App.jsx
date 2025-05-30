import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Register from './pages/Register';
import Category from './pages/Category';
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="container py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
