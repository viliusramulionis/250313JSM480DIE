import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Register from './pages/Register';
import Category from './pages/Category';
import MainContext from './context/MainContext';
import Loader from './components/loader/Loader';
import Advertisement from './pages/Advertisement';
import NewAdvertisement from './pages/NewAdvertisement';
import DefaultLayout from './layouts/DefaultLayout';
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
            <DefaultLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/advertisement/:id" element={<Advertisement />} />
                <Route path="/new-advertisement" element={<NewAdvertisement />} />
              </Routes>
            </DefaultLayout>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  )
}

export default App
