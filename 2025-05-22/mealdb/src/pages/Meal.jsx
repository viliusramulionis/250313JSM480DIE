import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import axios from 'axios';

export default () => {
    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
        .then(resp => setData(resp.data.meals[0]));
    }, []);

    const formatIngredients = (data) => {
        console.log(data);

        const res = [];

        for(let i = 1; i <= 20; i++) {
            if(data['strIngredient' + i].trim())
                res[res.length] = <li key={i}>{data['strIngredient' + i]} {data['strMeasure' + i]}</li>
        }

        return res;
    }

    return data && (
        <>
            <h1 className="mb-5">{data.strMeal}</h1>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img 
                        src={data.strMealThumb} 
                        alt={data.strMeal} 
                    />
                    <iframe 
                        width="100%" 
                        height="315" 
                        src={'https://www.youtube.com/embed/' + data.strYoutube.split('?v=')[1]}
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="col-12 col-md-6">
                    <p>{data.strInstructions}</p>
                    <h4>Area:</h4>
                    <p>{data.strArea}</p>
                    <h4>Category:</h4>
                    <p>{data.strCategory}</p>
                    <h4>Ingredients:</h4>
                    <ul>
                        {formatIngredients(data)}
                    </ul>
                    <Link to={data.strSource} target="_blank">Source</Link>
                </div>
            </div>
        </>
    );
}