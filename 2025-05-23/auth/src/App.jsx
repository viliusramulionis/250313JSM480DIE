import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home, Admin, Login, Logout } from './pages'
import Header from './components/header/Header';
import AuthContext from './context/AuthContext'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn);

  return (
    <>
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <BrowserRouter>
          <Header isLoggedIn={isLoggedIn} />
          <div className="container py-5">
            <Routes>
              <Route path="/" element={<Home />} />
              {isLoggedIn &&
                <Route path="/admin" element={<Admin />} />
              }
              <Route path="/logout" element={<Logout />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  )
}

export default App
