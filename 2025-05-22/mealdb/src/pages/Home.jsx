import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default () => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(resp => setData(resp.data.meals[0]));
    }, []);

    return (
        <>
            <div className="text-center">
                <Link to={'/meal/' + data.idMeal}>
                    <h3 className="mb-4">{data.strMeal}</h3>

                    <img src={data.strMealThumb} alt="" />
                </Link>
            </div>
        </>
    );
}