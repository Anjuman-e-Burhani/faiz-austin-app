import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import MenuCard from './cards/MenuCard'
import { API } from 'aws-amplify';
import { listDishes, listCooks, listMenus } from './graphql/queries';
import { createMenu as createMenuMutation } from './graphql/mutations';

const initialFormState = { serveOn: '', pickupOn: '', isActive: true, isPublished: false}

function Planner() {

    const [plans, setPlans] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [cooks, setCooks] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [menuData, setMenuData] = useState([
        { dish: '', cook: '' }
    ]);

    useEffect(() => fetchPlans(), []);
    useEffect(() => fetchCooks(), []);
    useEffect(() => fetchDishes(), []);

    async function fetchPlans() {
        const planData = await API.graphql({ query: listMenus });
        const plansFromApi = planData.data.listMenus.items;
        const filteredPlans = plansFromApi.filter(plan => !plan.isPublished);
        const mapOfPlans = filteredPlans.reduce(
            (menuMap, plan) => ((menuMap[plan.serveOn] = menuMap[plan.serveOn] || []).push(plan), menuMap), {}
        )
        setPlans(Object.values(mapOfPlans));
    }

    async function fetchCooks() {
        const cookData = await API.graphql({ query: listCooks });
        const cooksFromApi = cookData.data.listCooks.items;
        setCooks(cooksFromApi);
    }

    async function fetchDishes() {
        const dishData = await API.graphql({ query: listDishes });
        const dishesFromApi = dishData.data.listDishes.items;
        setDishes(dishesFromApi);
    }

    async function createPlan() {
        if (!formData.serveOn || !formData.pickupOn) return;
        await Promise.all(
            menuData.map(
                async menuItem => {
                    const newPlan = {...formData, menuDishId: menuItem.dish, menuCookId: menuItem.cook}
                    await API.graphql({ 
                        query: createMenuMutation, 
                        variables: { input: newPlan } 
                    });
                }
            )    
        )
        setFormData(initialFormState);
    }

    const handleChange = (index, event) => {
        const values = [...menuData];
        if(event.target.name === 'dish') {
          values[index].dish = event.target.value
        } else if (event.target.name === 'cook') {
          values[index].cook = event.target.value
        }
        setMenuData(values);
    }

    const handleAddFields = () => {
        const values = [...menuData];
        values.push({ dish: '', cook: '' })
        setMenuData(values);
    };

    const handleRemoveFields = () => {
        const values = [...menuData];
        if(values.length > 1)  values.pop();
        setMenuData(values);
    };

    return (
        <div className='Planner p-5'>
            <Form style={{marginBottom: 30, marginTop: 30}}>
                <Container fluid='false'>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupServedOn">
                                <Form.Label>Item For Date: </Form.Label>
                                <Form.Control type="date" onChange={e => setFormData({ ...formData, 'serveOn': e.target.value})} />
                            </Form.Group>
                        </Col>
                        <Col>                        
                            <Form.Group className="mb-3" controlId="formGroupPickupOn">
                                <Form.Label>Item Should Be Picked On: </Form.Label>
                                <Form.Control type="date" onChange={e => setFormData({ ...formData, 'pickupOn': e.target.value})} />
                            </Form.Group>                        
                        </Col>
                    </Row>
                    {
                        menuData.map((data, i) => {
                            return (
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupSelectDish">
                                            <Form.Label>Select Dish</Form.Label>
                                            <Form.Select aria-label="Dish" name="dish" onChange={event => handleChange(i, event)}>
                                                {
                                                    dishes.map(dish => (
                                                        <option value={dish.id}>{dish.name}</option>
                                                    ))
                                                }
                                            </Form.Select>  
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupSelectCook">
                                            <Form.Label>Select Cook</Form.Label>
                                            <Form.Select aria-label="Cook" name="cook" onChange={event => handleChange(i, event)}>
                                                {
                                                    cooks.map(cook => (
                                                        <option value={cook.id}>{cook.name}</option>
                                                    ))
                                                }
                                            </Form.Select>  
                                        </Form.Group>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                    <Row>
                        <Col className='pt-3 d-flex justify-content-between'>
                            <Button variant="warning" onClick={handleAddFields}>Add Another Dish</Button>
                            <Button variant="danger" onClick={handleRemoveFields}>Remove</Button>
                        </Col>
                    </Row>
                    <Button as={Col} style={{marginTop: 20}}variant="primary" type="submit" onClick={createPlan}>Save</Button>
                    <Row>
                        {
                            plans.map(plan => (
                                <Col fluid='false' id={plan.id}>
                                    <MenuCard key={plan.id} plan={plan}/>
                                </Col>
                            ))
                        }   
                    </Row>                
                </Container>
            </Form>
        </div>
    )

}

export default Planner;