import React from 'react';
import { Card, Button, CardGroup, ListGroup } from 'react-bootstrap';
import { updateMenu as updateMenuMutation } from '../graphql/mutations';
import { API } from 'aws-amplify';

function MenuCard(props) {

    async function publish(plans) {
        await Promise.all(
            plans.map(
                 async plan => {
                    let updateInput = {
                        id: plan.id,
                        serveOn: plan.serveOn,
                        pickupOn: plan.pickupOn,
                        menuDishId: plan.dish.id,
                        menuCookId: plan.cook.id,
                        isActive: plan.isActive,
                        isPublished: true
                    }
                    await API.graphql({ 
                        query: updateMenuMutation, 
                        variables: { input: updateInput } 
                    });                    
                }
            )
        );
    }

    return (
        <div className='MenuCard'>
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Menu Date: {props.plan[0].serveOn}</Card.Header>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Pickup: {props.plan[0].pickupOn}</Card.Subtitle>
                        <ListGroup variant="flush">
                        {
                            props.plan.map(p => {
                                return (
                                    <ListGroup.Item>{p.dish.name} cooked by {p.cook.name}</ListGroup.Item>
                                );
                            })
                        }
                        </ListGroup>
                        <Button variant="primary" onClick={() => publish(props.plan)}>Publish</Button>
                    </Card.Body>
                </Card>        
            </CardGroup>
        </div>

    );
}

export default MenuCard;
