import React from 'react'
import { Form, Button, Card,Navbar} from 'react-bootstrap'
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";



const Share = (props) => {
    const navigate = useNavigate();

    async function createKey() {
        
    }
    
    return (
        <>
        
         <Navbar>
             <Header/>
         </Navbar>
            
        <Card style = {{padding: 50, width: 500}} >
            <Card.Body>
                <
                    h2 className = 'text-center '>Share Data with Physician</h2>
                <div className = "d-grid gap-2">

                    {/* <Button onClick = {() => navigate("/share/add-physician")} className = "w-100 text">Add a new Physician </Button>
                    <div style = {{padding: 50 }} >
                        <h3>Listed Physician:</h3>
                        <p>Click box to share data with physician</p>
                        <label>
                            <ul>
                                <li>
                                    <input type = "checkbox" name = "Dr. 1"/> Dr. 1
                                </li> 
                                <li>
                                    <input type = "checkbox" name = "Dr. 2"/> Dr.2 
                                </li>
                                <li>
                                    <input type = "checkbox" name = "Dr. 3"/> Dr. 3  
                                </li>
                            </ul>
                        </label>
                        <Button style = {{down: 10}} className = "w-100 text">Send Key to Physician</Button>
                    </div> */}
                    <Form.Control size="lg" type="text" placeholder="Large text" />
                    <Button style = {{down: 400}} className = "w-100 text"> Create Key  </Button>
                   
                </div>
                    
        
            </Card.Body>
        </Card>
        
        
        </>
    );
 };

 export default Share;