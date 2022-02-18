import React from 'react'
import { Form, Button, Card,Navbar} from 'react-bootstrap'
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";



const Share = (props) => {
    const navigate = useNavigate();

    let shareState = {
        dataShareValues: {
            steps: false,
            heartrate: false,
            sleep: false,
            stepsintraday: false,
            heartrateintraday: false
        }
    }

    async function createKey() {
        
    }

    const handleCheckbox = event => {
        console.log(event.target.value);
        let state = shareState;
        state.dataShareValues[event.target.value] = event.target.checked;
        this.setState(state)
        console.log(state.dataShareValues);
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

                    {/* <Button onClick = {() => navigate("/share/add-physician")} className = "w-100 text">Add a new Physician </Button> */}
                    <div style = {{padding: 50 }} >
                        <p>Click box to enable specific sharing data</p>
                        <label for="accept">
                            <ul>
                                <li>
                                    <input onChange = {handleCheckbox } type = "checkbox" 
                                    name = "dataShareValues" 
                                    value="steps" 
                                    checked = {shareState.dataShareValues.steps}/> Share steps
                                </li> 
                                <li>
                                    <input onChange = {handleCheckbox} type = "checkbox" 
                                    name = "dataShareValues" 
                                    value="heartrate" 
                                    checked = {shareState.dataShareValues.heartrate}/> Share heart rate
                                </li>
                                <li>
                                    <input onChange = {handleCheckbox} type = "checkbox" 
                                    name = "dataShareValues" 
                                    value="sleep" 
                                    checked = {shareState.dataShareValues.sleep}/> Share sleep data
                                </li>
                                <li>
                                    <input onChange = {handleCheckbox} type = "checkbox" 
                                    name = "dataShareValues" 
                                    value="stepintraday" 
                                    checked = {shareState.dataShareValues.stepsintraday}/> Share step intraday data
                                </li>
                                <li>
                                    <input onChange = {handleCheckbox} type = "checkbox" 
                                    name = "dataShareValues" 
                                    value="heartrateintraday" 
                                    checked = {shareState.dataShareValues.heartrateintraday}/>Share heart rate intraday data
                                </li>
                            </ul>
                        </label>
                        
                        {/* <label>
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
                        </label> */}
                        {/* <Button style = {{down: 10}} className = "w-100 text">Send Key to Physician</Button> */}
                        <Button style = {{down: 400}} className = "w-100 text"> Create Key  </Button>
                        <Form.Control size="lg" type="text" placeholder="Large text" />
                    </div>
                    {/* <Form.Control size="lg" type="text" placeholder="Large text" />
                    <Button style = {{down: 400}} className = "w-100 text"> Create Key  </Button> */}
                </div>
                    
        
            </Card.Body>
        </Card>
        
        
        </>
    );
 };

 export default Share;