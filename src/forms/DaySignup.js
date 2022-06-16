import React from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';

function DaySignup(props) {
    return (
        <div className='SignupForm p-5'>
            {
                props.menu.map(oneItem => {
                    return (
                        <div className='OneItemSignup'>
                            <Form style={{marginBottom: 30, marginTop: 30}}>
                            <Container fluid='false'>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupName">
                                            <Form.Label>{oneItem.serveOn}</Form.Label>
                                        </Form.Group>
                                    </Col>                                            
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupCategory">
                                            <Form.Label>Size</Form.Label>
                                            <Form.Select aria-label="Size">
                                                <option value="Large">Large</option>
                                                <option value="Small">Small</option>
                                                <option value="Opt Out">Opt Out</option>
                                            </Form.Select>  
                                        </Form.Group>                      
                                    </Col>                                            
                                </Row>
                            </Container>
                            </Form>    
                        </div>
                    );
                })
            }
        </div>
    );
}

export default DaySignup;