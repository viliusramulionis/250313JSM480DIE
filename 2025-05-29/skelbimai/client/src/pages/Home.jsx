import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router";
import MainContext from '../context/MainContext';

import axios from 'axios';

export default () => {
    const [data, setData] = useState([]);
    const { setContext } = useContext(MainContext);

    useEffect(() => {
        setContext(prev => ({ ...prev, loading: true }));
        
        axios.get('/api/category')
        .then(resp => {
            // Jeigu krovimas pavyko nustatome gautą informaciją prie state'o
            setData(resp.data)
        })
        .catch(err => {
            // Susigrąžiname klaidos žinutę
            setContext(prev => ({ 
                ...prev, 
                message: err.response.data,
                status: 'danger' 
            }));
        })
        // Bet kuriuo atveju keičiame krovimo reikšmės nurodymą į neigiamą, nes krovimas yra baigtas
        .finally(() => setContext(prev => ({ ...prev, loading: false })))
    }, []);

    return (
        <>
            <Link to="/register">Registracija</Link>
            <h1>Titulinis</h1>
            
            <ul>
                {data.map((item) => 
                    <li key={item._id}>
                        <Link to={'/category/' + item._id}>{item.name}</Link>
                    </li>
                )}
            </ul>
        </>
    );
}