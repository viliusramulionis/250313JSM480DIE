import { useState } from 'react';
import { Link } from 'react-router';
import { extractFormData } from '../utils/common';
import axios from 'axios';

export default () => {
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = extractFormData(e.target);

        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + data.title)
        .then(resp => {
            setData(resp.data.meals);
        })
    } 

    return (
        <>
            <h1>Search</h1>
            <form 
                className="input-group my-4"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    placeholder="Enter meal title"
                    className="form-control"
                    name="title"
                />
                <button 
                    className="btn btn-primary"
                >Search</button>
            </form>
            <div className="row">
                {data.map(value => 
                    <div className="col-md-4 col-12">
                        <div className="pb-4">
                            <Link to={'/meal/' + value.idMeal}>
                                <img src={value.strMealThumb} alt={value.strMeal} />
                                <h3>{value.strMeal}</h3>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}