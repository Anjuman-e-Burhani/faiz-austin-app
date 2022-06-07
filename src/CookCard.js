import React from 'react';
import { Card } from 'react-bootstrap';

function CookCard(props) {

    return (
        <div className='CookCard'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.cook.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.cook.contact}</Card.Subtitle>
                    <Card.Text>{props.cook.address}</Card.Text>
                </Card.Body>
            </Card>        
        </div>
    );
}

export default CookCard;
