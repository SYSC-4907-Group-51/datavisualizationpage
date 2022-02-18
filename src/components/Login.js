// src/Login.js 
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
// import { store } from "../index";
import { store } from "../App";


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
        // whole response in localstorage
       const response2LS = localStorage.setItem("loginResp",JSON.stringify(response));
        
        if(response.status_code !== 200){
        //  if(response.status_code !== 200){
            setError("Invalid username/password")
        } else {
            
            // store.dispatch({
            //     type: "storeAccess",
            //     payload: {
                    
            //         access: response.data.access
            //     }
            // });
            // store whole response in store 
            store.dispatch({
                type: "storeAccess",
                payload: {
                    data: {
                        username: response.data.username,
                        first_name: response.data.first_name,
                        last_name: response.data.last_name,
                        email: response.data.email,
                        created_at: response.data.created_at,
                        updated_at: response.data.updated_at,
                        refresh: response.data.refresh,
                        access: response.data.access,

                    },
                    status_code: response.status_code
                    
                }
            });
            console.log(store.getState());
            //console.log( "Loggin "+ JSON.stringify(store.getState()));
            // console.log( "Loggin "+ JSON.stringify(store.payload.access));
            navigate("/addtracker")
            

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
                <Form.Group id ="username2">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type = "username" required />

                    </Form.Group>
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