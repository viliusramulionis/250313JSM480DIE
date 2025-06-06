import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'

// Nurodymas visoms axios uzklausoms perdavineti sausaineliu duomenis
axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(
    <App />
)
