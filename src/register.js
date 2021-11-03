import React, {useState} from 'react';
import {Button, Card, Form, Row, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'
import { useHistory } from 'react-router-dom';
import './register.css';
import firebase from './firebase/firebase';

export default function Register() {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const onSubmit = () => {
        if (mail === '' || pass === ''){
            setError ('You must fill all the fields');
        }
        else {
            const confirmationResult = firebase.auth().createUserWithEmailAndPassword(mail,pass);
            console.log(confirmationResult);
        }
    }

    return(
            <Card>
                <Card.Img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' alt = 'card img' className = 'image'/>
                <Card.Body>
                    {(error !== '') &&
                        <Alert variant = 'danger'>{error}</Alert>
                        
                    }
                    <Form>
                        <Row className = 'm-3'>
                            <Form.Group>
                                <Form.Label>Enter Email Address: </Form.Label>
                                <Form.Control
                                    type = 'email'
                                    name = 'email'
                                    placeholder = 'Email address' 
                                    value = {mail}
                                    onChange = {(e) => setMail(e.target.value)}
                                    required = {true}
                                />
                            </Form.Group>
                        </Row>
                        <Row className = 'm-3'>
                            <Form.Group>
                                <Form.Label>Enter password: </Form.Label>
                                <Form.Control
                                    type = 'password'
                                    name = 'password'
                                    placeholder = 'Password' 
                                    value = {pass}
                                    onChange = {(e) => setPass(e.target.value)}
                                    required = {true}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="m-3">
                            <Form.Group>
                                <Form.Label>Repeat password: </Form.Label>
                                <Form.Control
                                    type = 'password'
                                    placeholder = 'Repeat password' 
                                    onChange = {(e) => {
                                        if(pass !== e.target.value){
                                            setError('Passwords do no not match');
                                        }
                                        else {
                                            setError('');
                                        }
                                        
                                        
                                    }}
                                />
                            </Form.Group>
                        </Row>
                        
                        
                        <Button
                            className = 'register-button'
                            
                        >
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        
    )
}