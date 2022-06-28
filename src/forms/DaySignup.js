import React from 'react';
import { Col, Form, Card, CardGroup, Button } from 'react-bootstrap';

function DaySignup(props) {

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className='SignupForm p-5' style={{marginBottom: 30, marginTop: 30}}>
            <CardGroup>
            {
                props.menu.map(oneItem => {
                    return (
                        <Col>
                            <Card border="dark" style={{ width: '24rem' }}>
                                <Card.Header>Item for: { new Date(oneItem.serveOn).toLocaleDateString('en-US', options) }</Card.Header>
                                <Card.Img variant="top" src={oneItem.dish.image} />
                                <Card.Body>
                                    <Card.Title>{oneItem.dish.name}</Card.Title>
                                    <Card.Text>{oneItem.dish.description}</Card.Text>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupCategory">
                                            <Form.Select aria-label="Size">
                                                <option value="Large">Large</option>
                                                <option value="Small">Small</option>
                                                <option value="Small">Opt Out</option>
                                            </Form.Select>  
                                        </Form.Group>                      
                                    </Form>
                                </Card.Body>
                                <div className="text-center">
                                    <Button variant="primary" style={{marginBottom: 10}}>Save</Button>
                                </div>
                                <Card.Footer className="text-muted">Pickup on: { new Date(oneItem.pickupOn).toLocaleDateString('en-US', options) }</Card.Footer>
                            </Card>
                        </Col>

                    );
                })
            }
            </CardGroup>
        </div>
    );
}

export default DaySignup;