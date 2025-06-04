import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(resp => setData(resp.data));
    }, []);

    return (
        <>
            <h1>Titulinis</h1>
            <p>{data}</p>
        </>
    );
} 