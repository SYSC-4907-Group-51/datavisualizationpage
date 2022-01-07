import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import {Link} from "react-router-dom"
export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    
    return (
        <>
       
        <Card> 
            <Card.Body>
                <h2 className = 'text-center mb-4'>Log in</h2>
                <Form>
                    <Form.Group id ="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" ref = {emailRef} required />

                    </Form.Group>
                    <Form.Group id ="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" ref = {passwordRef} required />
                    </Form.Group>
                    
                    <Button className = "w-100 text" type = "submit">Log in</Button>
                </Form>
            </Card.Body>
        </Card>

        
        </>
    )
}