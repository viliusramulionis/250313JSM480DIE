import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { extractFormData } from '../utils/common';
import MainContext from '../context/MainContext';
import axios from 'axios';

export default () => {
    const [data, setData] = useState([]);
    const { setContext } = useContext(MainContext);
    const navigate = useNavigate();

    useEffect(() => {
        setContext(prev => ({ ...prev, pageTitle: "Naujas Skelbimas" }));
    }, []);

    useEffect(() => {
        axios.get('/api/category')
        .then(resp => setData(resp.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // SIUNČIANT FAILUS DUOMENYS PERSIUNČIAMI multipart-formdata FORMATU!
        // TOKIU ATVEJU DUOMENŲ IŠ FORMOS TRAUKTI NEBEREIKIA
        // HEADERIO NURODYTI TAIPOGI

        // const data = extractFormData(e.target);
        // const config = {
        //     headers: {
        //         'Content-Type' : 'application/x-www-form-urlencoded'
        //     }
        // };

        const data = new FormData(e.target);
        const config = {}

        // setLoading(true);

        setContext(prev => ({ ...prev, loading: true }));

        axios.post('/api/advertisement', data, config)
        // Aktyvuojama kai gautas statuso kodas 200
        .then(resp => {
            setContext(prev => ({ 
                ...prev, 
                message: 'Sveikiname skelbimas sėkmingai patalpintas ir jau yra aktuvuotas puslapyje!', 
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
                        placeholder="Įveskite skelbimo pavadinimą"
                        className="form-control"
                        name="title"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <div className="input-group">
                        <label className="input-group-text">Įkelkite nuotrauką:</label>
                        <input 
                            type="file" 
                            className="form-control"
                            name="photo"
                            required={true}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        placeholder="Įveskite skelbimo lokaciją"
                        className="form-control"
                        name="location"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="tel" 
                        placeholder="Įveskite skelbimo telefono numerį"
                        className="form-control"
                        name="phone_number"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="email" 
                        placeholder="Įveskite skelbimo el. pašto adresą"
                        className="form-control"
                        name="email"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <div className="input-group">
                        <label className="input-group-text">Skelbimo kaina:</label>
                        <input 
                            type="number" 
                            placeholder="Įveskite skelbimo kainą"
                            className="form-control"
                            name="price"
                            defaultValue="0"
                            required={true}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="input-group">
                        <label className="input-group-text">Skelbimo kategorija:</label>
                        <select 
                            name="category_id"
                            className="form-control"
                        >
                            {data.map(item => 
                                <option key={item._id} value={item._id}>{item.name}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <textarea 
                        placeholder="Įveskite skelbimo aprašymą"
                        className="form-control"
                        name="description"
                        style={{ minHeight: 200 }}
                        required={true}
                    ></textarea>
                </div>
                <button className="btn btn-primary">Talpinti</button>
            </form>
        </>
    );
}