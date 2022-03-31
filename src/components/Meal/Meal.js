import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = props => {
    const { strMeal, strMealThumb, strInstructions, idMeal } = props.meal;
    const dynamicPath = `/resturant/${idMeal}`;


    return (
        <div>
            <Col>
                <Card border="primary" style={{ width: '18rem', padding: '5px', margin: '15px' }}>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            <span className='d-block text-truncate'>
                                {strInstructions}
                            </span>
                            <Link to={dynamicPath}>See More</Link>
                        </Card.Text>
                        <Link to={dynamicPath}><Button>Click to See Details</Button></Link>
                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default Meal;