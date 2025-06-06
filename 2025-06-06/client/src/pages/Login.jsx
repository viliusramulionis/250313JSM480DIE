import { useState } from 'react';
import { useNavigate } from 'react-router';
import { extractFormData } from '../utils/common';
import axios from 'axios';

export default ({ setUser }) => {
    const [alert, setAlert] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = extractFormData(e.target);

        const config = {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            // withCredentials: true
        };

        axios.post('http://localhost:3000/api/user/login', data, config)
        .then(resp => {
            setUser(resp.data);
            navigate('/');
        })
        .catch(err => setAlert({ message: err.response.data, status: 'danger' }));
    }

    return (
        <>
            <div className="container" style={{ maxWidth: 768 }}>
                <h1>Prisijungimas</h1>
                {alert.message && 
                    <div className={'alert alert-' + alert.status}>
                        {alert.message}
                    </div>
                }
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="El. pašto adresas"
                            required={true}
                            name="email"
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Slaptažodis"
                            required={true}
                            name="password"
                        />
                    </div>
                    <button className="btn btn-warning">Prisijungti</button>
                </form>
            </div>
        </>
    );
}