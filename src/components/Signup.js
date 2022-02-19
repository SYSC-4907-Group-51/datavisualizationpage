import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Signup() {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const emailRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    //const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
            
//         try {
//         setError("")
//         setSuccess("")
//         const response = await signup(usernameRef.current.value, passwordRef.current.value, firstnameRef.current.value, lastnameRef.current.value, emailRef.current.value)
//         //history.push("/")
//         console.log(response)
//         if(response.id){
//             setSuccess("Account successfully created")     
//         }else if(response.password){
//             setError("Weak password")
//         } else if(response.username) {
//             setError("Username already exists")
//         } else if(response.email){
//             setError("Email already been used") 
//         } 
//         }
        // this is the updated logic to take 
         try {
            setError("")
            setSuccess("")
            const response = await signup(usernameRef.current.value, passwordRef.current.value, firstnameRef.current.value, lastnameRef.current.value, emailRef.current.value)
            //history.push("/")
            // const response2 = response.json()
            console.log(response)
            
            if (response.status_code === 201) {
                navigate("/");
            } else {
                // These error messages aren't working need to be changed
                // not Paramount 
                if ( response.json().password) {
                    setError("Weak password")
                } else if ( response.json().username) {
                    setError("Username already exists")
                } else if ( response.json().email) {
                    setError("Email already been used")
                }
            }
        }
        catch {
            setError("Failed to create an account")
        }
    }
    return (
        <>
       
        <Card> 
            <Card.Body>
                <h2 className = 'text-center mb-4'>Sign up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id ="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type = "username" ref = {usernameRef} required />

                    </Form.Group>
                    <Form.Group id ="first-name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type = "firstname" ref = {firstnameRef} required />
                    </Form.Group>
                    <Form.Group id ="last-name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type = "lastname" ref = {lastnameRef} required />
                    </Form.Group>
                    <Form.Group id ="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" ref = {emailRef} required />
                    </Form.Group>
                    <Form.Group id ="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" ref = {passwordRef} required />
                    </Form.Group>
                    <Button className = "w-100 text" type = "submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>

        <div className = "w-100 text-center mt-2">
            Already have an account? <Link to = "/">Log in</Link>
        </div>
        </>
    )
}
