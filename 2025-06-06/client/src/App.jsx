import { BrowserRouter, Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/header/Header';
import axios from 'axios';
import './App.css'

const App = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);

    axios.get('http://localhost:3000/api/user/check-auth')
    .then(resp => {
      setUser(resp.data)
    })
    .catch(err => console.log('Vartotojas yra neprisijungęs'))
    .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header user={user} />
        <div className="container">
          <Routes>
              <Route path="/" element={<Home user={user} loading={loading} />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
