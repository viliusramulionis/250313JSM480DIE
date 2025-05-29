import { extractFormData } from '../utils/common';
import axios from 'axios';

export default () => {
    
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

        axios.post('/api/user', data, config)
        .then(resp => console.log(resp));
    }

    return (
        <>
            <h1 className="mb-5">Registracija</h1>
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