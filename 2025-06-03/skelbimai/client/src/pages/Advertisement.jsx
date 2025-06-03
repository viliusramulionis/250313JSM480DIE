import { useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router';
import { convertFormatText } from '../utils/common';
import MainContext from '../context/MainContext';
import axios from 'axios';

export default () => {
    const [data, setData] = useState(); 
    const { id } = useParams();

    const { setContext } = useContext(MainContext);

    useEffect(() => {
        setContext(prev => ({ ...prev, pageTitle: false }));
    }, []);

    useEffect(() => {
        setContext(prev => ({ ...prev, loading: true }));
        
        axios.get('/api/advertisement/' + id)
        .then(resp => {
            // Jeigu krovimas pavyko nustatome gautą informaciją prie state'o
            console.log(resp);
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

    return data && (
        <>
            <div className="row">
                <div className="col-12 col-md-8">
                    <div className="mb-3">
                        <img src={'/photos/' + data.photo} alt={data.title} />
                    </div>
                    <h3>{data.title}</h3>
                    <div>{data.location}</div>
                    <div className="fs-5 fw-bold text-success">{data.price.toLocaleString('lt-LT')} €</div>
                    <div className="mt-5">
                        {convertFormatText(data.description)}
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="d-flex gap-3">
                        <div>
                            <img 
                                src={data.user[0].photo} 
                                alt={data.user[0].name} 
                                className="rounded-circle"
                                style={{
                                    maxWidth: 80
                                }}
                            />
                        </div>     
                        <div>
                            <div>{data.user[0].name}</div>
                            <div>{data.email}</div>
                            <div><strong>{data.phone_number}</strong></div>
                        </div>                   
                    </div>
                </div>
            </div>
        </>
    );
}