import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Meal from '../../Meal/Meal';

const Resturant = () => {
    const [meals, setMeals] = useState([]);
    const [inputText, setInputText] = useState('');
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [inputText]);
    const handleSearch = event => {
        setInputText(event.target.value);
    }
    return (
        <div>
            <Link to='/'>Go to Home</Link>
            <br />
            <input onChange={handleSearch} placeholder='search food here' type="text" />
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}></Meal>)
                }
            </Row>


        </div>
    );
};

export default Resturant;