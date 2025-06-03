import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from "react-router";
import MainContext from '../context/MainContext';
import Alert from '../components/alert/Alert';
import axios from 'axios';


export default () => {
    const [data, setData] = useState(); 
    const { id } = useParams();

    const { setContext } = useContext(MainContext);

    useEffect(() => {
        setContext(prev => ({ ...prev, loading: true }));
        
        axios.get('/api/category/' + id)
        .then(resp => {
            // Jeigu krovimas pavyko nustatome gautą informaciją prie state'o
            // console.log(resp);
            setData(resp.data)

            setContext(prev => ({ ...prev, pageTitle: resp.data.name }));
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
            {data.ads.map((item) => 
                <div key={item._id} className="mb-3">
                    <div className="row">
                            <div className="col-12 col-md-3">
                                <Link to={'/advertisement/' + item._id}>
                                    <img src={'/photos/' + item.photo} alt="" style={{ maxWidth: '100%' }} />
                                </Link>
                            </div>
                            <div className="col-12 col-md-9">
                                <Link to={'/advertisement/' + item._id}>
                                    <h4>
                                        {item.title}
                                    </h4>
                                </Link>
                                <div>{item.location}</div>
                                <div className="fs-5 fw-bold text-success">{item.price.toLocaleString('lt-LT')} €</div>
                            </div>
                    </div>
                </div>
            )}
        </>
    )
}