import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default ({ user, loading }) => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    // Tikriname ar vartotojas yra prisijungęs, jeigu ne peradresuojame jį į kitą puslapį
    useEffect(() => {
        console.log(user, loading, typeof loading);
        if(!user && !loading && typeof loading !== 'undefined') {
            navigate('/login');
        }
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/api/data')
        .then(resp => setData(resp.data));
    }, []);

    return user && (
        <>
            <h1>Titulinis</h1>
            {data.map(item => 
                <ul>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </ul>
            )}
        </>
    );
}