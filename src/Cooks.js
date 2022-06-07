import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { API } from 'aws-amplify';
import { listCooks } from './graphql/queries';
import { createCook as createCookMutation } from './graphql/mutations';
import CookCard from './CookCard';

const initialFormState = { name: '', contact: '', address: '', isActive: true}

function Cooks() {

    const [cooks, setCooks] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => fetchCooks(), []);

    async function fetchCooks() {
        const apiData = await API.graphql({ query: listCooks });
        const cooksFromApi = apiData.data.listCooks.items;
        setCooks(cooksFromApi);
    }

    async function createCook() {
        if (!formData.name || !formData.contact || !formData.address) return;
        await API.graphql({ 
            query: createCookMutation, 
            variables: { input: formData } 
        });
        setCooks([ ...cooks, formData ]);
        setFormData(initialFormState);
    }

    return (
        <div className='Cooks p-5'>
            <div style={{marginBottom: 30, marginTop: 30}}>
                <Container>
                    <Row>
                    {
                        cooks.map(cook => (
                            <Col fluid='false' id={cook.id}>
                                <CookCard cook={cook} />                            
                            </Col>
                        ))
                    }
                    </Row>
                </Container>
            </div>
            <Form>
                <Container fluid='false'>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={e => setFormData({ ...formData, 'name': e.target.value})} />
                            </Form.Group>                    
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupContact">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Enter cell number" onChange={e => setFormData({ ...formData, 'contact': e.target.value})} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formGroupAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" onChange={e => setFormData({ ...formData, 'address': e.target.value})} />                
                        </Form.Group>
                    </Row>
                    <Button as={Col} variant="primary" type="submit" onClick={createCook}>Submit</Button>
                </Container>
            </Form>
        </div>
    )
}

export default Cooks;