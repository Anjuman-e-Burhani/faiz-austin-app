import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { API, Storage } from 'aws-amplify';
import { listDishes } from '../graphql/queries';
import { createDish as createDishMutation } from '../graphql/mutations';
import DishCard from '../cards/DishCard';

const initialFormState = { name: '', description: '', category: ''}

function Dishes() {

    const [dishes, setDishes] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => fetchDishes(), []);

    async function fetchDishes() {
        const apiData = await API.graphql({ query: listDishes });
        const dishesFromApi = apiData.data.listDishes.items;
        await Promise.all(
            dishesFromApi.map(
                async dish => {
                    if (dish.image) {
                        const image = await Storage.get(dish.image);
                        dish.image = image;
                    }
                    return dish;
                }
            )
        )
        setDishes(apiData.data.listDishes.items);
    }

    async function createDish() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ 
            query: createDishMutation, 
            variables: { input: formData } 
        });
        if (formData.image) {
            const image = await Storage.get(formData.image);
            formData.image = image;
        }
        setDishes([ ...dishes, formData ]);
        setFormData(initialFormState);
    }

    async function onChange(e) {
        if (!e.target.files[0]) 
            return
        const file = e.target.files[0];
        setFormData({ ...formData, image: file.name });
        await Storage.put(file.name, file);
        fetchDishes();
    }

    return (
        <div className='Dishes p-5'>
            <Form style={{marginBottom: 30, marginTop: 30}}>
                <Container fluid='false'>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" onChange={e => setFormData({ ...formData, 'name': e.target.value})} />
                            </Form.Group>
                        </Col>                                            
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Select aria-label="Category" onChange={e => setFormData({ ...formData, 'category': e.target.value})}>
                                    <option value="Veg Curry">Veg Curry</option>
                                    <option value="Non-Veg Curry">Non-Veg Curry</option>
                                    <option value="Veg Rice">Veg Rice</option>
                                    <option value="Non-Veg Rice">Non-Veg Rice</option>
                                </Form.Select>  
                            </Form.Group>                      
                        </Col>                                            
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formGroupDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="textarea" placeholder="Enter description" onChange={e => setFormData({ ...formData, 'description': e.target.value})} />
                        </Form.Group>                    
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formGroupDishImage">
                            <Form.Label>Dish Image File</Form.Label>
                            <Form.Control type="file" onChange={onChange}/>
                        </Form.Group>
                    </Row>
                    <Button as={Col} variant="primary" type="submit" onClick={createDish}>Save</Button>
                </Container>
            </Form>
            <Container fluid='false'>
                <Row>
                    <div style={{marginBottom: 30}}>
                        {
                            dishes.map(dish => (
                                <Col>
                                    <DishCard dish={dish}/>
                                </Col>
                            ))
                        }
                    </div>
                </Row>
            </Container>
        </div>
    );

}

export default Dishes;