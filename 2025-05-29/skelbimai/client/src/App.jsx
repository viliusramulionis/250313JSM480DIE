import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Register from './pages/Register';
import Category from './pages/Category';
import MainContext from './context/MainContext';
import Loader from './components/loader/Loader';
import Advertisement from './pages/Advertisement';
import './App.css'


const App = () => {
  const [context, setContext] = useState({
    loading: false,
    message: false,
    status: false
  });

  // const data = {
  //   loading: loading,
  //   setLoading: setLoading
  // };

  // const data = { loading, setLoading };

  return (
    <>
      <MainContext.Provider value={{ context, setContext }}>
        <Loader />
        <BrowserRouter>
          <div className="container py-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/advertisement/:id" element={<Advertisement />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  )
}

export default App
