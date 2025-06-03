import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { extractFormData } from '../utils/common';
import MainContext from '../context/MainContext';
import axios from 'axios';

export default () => {
    const { setContext } = useContext(MainContext);
    const navigate = useNavigate();

    useEffect(() => {
        setContext(prev => ({ ...prev, pageTitle: "Registracija" }));
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = extractFormData(e.target);

        // SIUNČIANT HTTP METODU GET:
        // axios.get()
        // POST METODU:
        // axios.post()
        // PUT METODU:
        // axios.put()
        // DELETE METODU
        // axios.delete()
        const config = {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        };

        setContext(prev => ({ ...prev, loading: true }));

        axios.post('/api/user', data, config)
        // Aktyvuojama kai gautas statuso kodas 200
        .then(resp => {
            setContext(prev => ({ 
                ...prev, 
                message: 'Sveikiname sėkmingai užsiregistravus!', 
                status: 'success' 
            }));

            setTimeout(() => navigate('/'), 4000);
        })
        // Kai gaunamas klaidos statuso kodas
        .catch(err => {
            setContext(prev => ({ 
                ...prev, 
                message: err.response.data, 
                status: 'danger' 
            }));
        })
        // Bet kuriuo atveju aktyvuojama funkcija
        .finally(() => setContext(prev => ({ ...prev, loading: false })));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        placeholder="Įveskite savo vardą" 
                        className="form-control" 
                        name="name"
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        placeholder="Įveskite savo el. pašto adresą" 
                        className="form-control" 
                        name="email"
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="password" 
                        placeholder="Įveskite savo slaptažodį" 
                        className="form-control" 
                        name="password"
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        placeholder="Įveskite nuotraukos adresą" 
                        className="form-control" 
                        name="photo"
                    />
                </div>
                <button className="btn btn-primary">Registruotis</button>
            </form>
        </>
    );
}