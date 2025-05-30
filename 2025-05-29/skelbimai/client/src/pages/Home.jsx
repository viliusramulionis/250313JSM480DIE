import { useState, useEffect } from 'react';
import { Link } from "react-router";
import axios from 'axios';

export default () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/category')
        .then(resp => setData(resp.data));
    }, []);

    return (
        <>
            <Link to="/register">Registracija</Link>
            <h1>Titulinis</h1>
            <ul>
                {data.map((item) => 
                    <li><Link to={'/category/' + item._id}>{item.name}</Link></li>
                )}
            </ul>
        </>
    );
}