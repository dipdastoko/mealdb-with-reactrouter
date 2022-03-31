import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetails = () => {
    const { mealdb } = useParams();
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealdb}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [mealdb]);
    console.log(meal);
    const { strMeal, strArea, strInstructions, strMealThumb, strYoutube } = meal;
    console.log(strMeal);
    return (
        <div>
            <div>
                <h1>{strMeal}</h1>
                <p>Origin: {strArea}</p>
                <img style={{ width: '450px' }} src={strMealThumb} alt="" />
                <blockquote><b><u>How to preare: </u></b><br />
                    {strInstructions}</blockquote>
                <a href={strYoutube} rel='noreferrer' target='_blank'>Watch in Youtube</a>
            </div>
        </div>
    );
};

export default MealDetails;