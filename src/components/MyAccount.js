// src/Login.js 
import React, { useRef, useState } from "react"
import { Form, Button, Card, Navbar, Alert } from 'react-bootstrap'
import Header from './Header';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
// import { store } from "../index";
import { store } from "../App";


const MyAccount = (props) => {
    // const emailRef = useRef()
 
    const [error, setError] = useState("")
    const { authorization } = useAuth()
    const { currentUser, logout, deleteAccount } = useAuth()
    const passwordRef = useRef()
    const navigate = useNavigate();


    async function handleLogout() {

        try {
            
            setError("")
            
            const response = await logout();
            console.log(response)
            
            if(response.status_code === 200 ){
                navigate("/");
                console.log(store.getState());
                
            }
            // else{
            //     // if is not necessary but makes more explict 
            //     if(response.status_code === 401 || response.status_code === 400 ){
            //     //if(response.status_code === 401 || response.status_code === 400 ){
            //         console.log(response.detail);
            //         setError(response.detail);
            //     }
            // }
        } 
        catch {
            setError("Failed to log out")
        }
    }

    async function handleDeleteAccount() {
     
        try{
        setError("")
        const response = await deleteAccount(passwordRef.current.value)
        console.log(response)

        if(response.status_code === 200){ // checks what type of response 
           
            navigate("/");
        } else {
            setError("Invalid password")
            
        }
        }catch{
            setError("Failed to delete account")
        }

       
    }

    return (
        <>

            <Navbar>
                <Header />
            </Navbar>

            <div style={{ padding: 50 }}>
                <h1>Account Information:</h1>
                <p>Click box to edit the following</p>

                <Form>
                    <Form.Group id="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" required />

                    </Form.Group>
                    <Form.Group id="first-name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="firstname" required />
                    </Form.Group>
                    <Form.Group id="last-name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="lastname" required />
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required />
                    </Form.Group>
                    <Button className="w-100 text">Update Changes </Button>
                </Form>

                <div className="w-100 text-center mt-2">
                    <Button onClick={handleLogout}>
                        Log Out
                    </Button>




                </div>
                <Card>
                    <Card.Body>

                        < Form   style={{ margin: 20 }} >
                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form.Group id="password">
                                <Form.Label> Confirm Password 2 delete</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>

                            <Button onClick={handleDeleteAccount}  className="w-100 text">Delete Account </Button>
                        </Form>
                    </Card.Body>
                </Card>



            </div>




        </>

    );

};
export default MyAccount;