// src/Login.js 
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import store from "../store"

const Login = (props) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate();
    const { login } = useAuth()
    const [error, setError] = useState("")
    //const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
        setError("")
        const response = await login(emailRef.current.value, passwordRef.current.value)
        console.log(response)
        if(response.details == "Invalid username/password"){
            setError("Invalid username/password")
        } else {
            store.dispatch({
                type: "storeAccess",
                payload: {
                    access: response.access
                }
            });
            console.log(store.getState());
            navigate("/dashboard")
        }
        } catch {
        setError("Failed to log in")
        }
    }

    return (
        <>
      
        <Card> 
            <Card.Body>
                <h2 className = 'text-center mb-4'>Log in</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id ="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type = "username" ref={emailRef} required />

                    </Form.Group>
                    <Form.Group id ="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" ref={passwordRef} required/>
                    </Form.Group>
                    
                    <Button className="w-100" type="submit">
                        Log In
                    </Button>
    
                </Form>
            </Card.Body>
        </Card>

        <div className = "w-100 text-center mt-2">
            Need an account? <Link to = "/signup">Sign Up</Link>
        </div>

        <Card>
            <Card.Body>
                <h3 className= 'text-center mb-4'>Health Care Provider Key</h3>
                <Form>
                    <Form.Group id = "key">
                        <Form.Label>Key</Form.Label>
                        <Form.Control type = "key"/>
                    </Form.Group>
                    <Button onClick = {() => navigate("/dashboard")} className = "w-100 text" >Log in</Button>
                </Form>
            </Card.Body>
        </Card>
        </>
        
    );

};
export default Login;