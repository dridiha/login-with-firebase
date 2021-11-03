import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {Button, Row, Form, Card, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import './login.css';

export default function Login() {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

   
    return (

        <div className = 'm-5'>
            <Card className = 'card-container'>
                <Card.Img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' alt = 'card img' className = 'image'/>
                <Card.Body>
                    {(message !== '') &&
                    <Alert variant = 'danger'>{message}</Alert>
                    }
                    <Form>
                        <Row className = 'm-3'>
                            <Form.Group >
                                <Form.Label>Email Address: </Form.Label>
                                <Form.Control 
                                    type = 'email' 
                                    placeholder = 'Email address'
                                    value = {mail}
                                    onChange={(e) => { setMail(e.target.value); }} 
                                />
                            </Form.Group>
                        </Row>
                        <Row className = 'm-3'>
                            <Form.Group>
                                <Form.Label>Password: </Form.Label>
                                <Form.Control
                                    type = 'password'
                                    name = 'password'
                                    placeholder = 'Password'
                                    value = {pass}
                                    onChange={(e) => { setPass(e.target.value); }}

                                />
                            </Form.Group>
                        </Row>
                
                     </Form>
                     <Button
                        className = 'submit-button'
                        type="button"
                        name="submit"
                        >
                        Login
                    </Button>
                    <Card.Text>
                        If you are not registered, you can register <Link to = '/register'>here</Link> 
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    );
}
