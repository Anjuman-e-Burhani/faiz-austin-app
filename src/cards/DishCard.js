import React from 'react';
import { Card } from 'react-bootstrap';

function DishCard(props) {
    return (
        <div className='DishCard'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.dish.image} />
                <Card.Body>
                    <Card.Title>{props.dish.name}</Card.Title>
                    <Card.Text>{props.dish.description}</Card.Text>
                </Card.Body>
            </Card>        
        </div>
    );
}

export default DishCard;
