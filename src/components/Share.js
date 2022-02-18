import React, { useRef, useState } from "react"
import { Form, Button, Card,Navbar} from 'react-bootstrap'
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"



const Share = (props) => {
    const navigate = useNavigate();
    const [steps, setSteps] = useState(false)
    const [heartrate, setHeartRate] = useState(false)
    const [sleep, setSleep] = useState(false)
    const [stepsintraday, setStepsIntraday] = useState(false)
    const [heartrateintraday, setHeartRateIntraday] = useState(false)
    const [error, setError] = useState("")
    const { createKey } = useAuth()

    // let shareState = {
    //     dataShareValues: {
    //         steps: false,
    //         heartrate: false,
    //         sleep: false,
    //         stepsintraday: false,
    //         heartrateintraday: false
    //     }
    // }

    async function handleKey(e) {
        e.preventDefault();

        try {
            setError("")
             
            const response = await createKey(steps, heartrate, sleep, stepsintraday, heartrateintraday)
            console.log(response)
        } catch {
            setError("Failed to create key")
        }
        
    }

    // const handleCheckbox = event => {
    //     console.log(event.target.value);
    //     let state = shareState;
    //     state.dataShareValues[event.target.value] = event.target.checked;
    //     this.setState(state)
    //     console.log(state.dataShareValues);
    // }
    
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
                                    <input onChange = {(e)=> setSteps(e.target.checked)} type = "checkbox" /> Share steps
                                </li> 
                                <li>
                                    <input onChange = {(e)=> setHeartRate(e.target.checked)}type = "checkbox" /> Share heart rate
                                </li>
                                <li>
                                    <input onChange = {(e)=> setSleep(e.target.checked)} type = "checkbox" /> Share sleep data
                                </li>
                                <li>
                                    <input onChange = {(e)=> setStepsIntraday(e.target.checked)} type = "checkbox" /> Share step intraday data
                                </li>
                                <li>
                                    <input onChange = {(e)=> setHeartRateIntraday(e.target.checked)} type = "checkbox" />Share heart rate intraday data
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
                        <Button onClick ={handleKey} style = {{down: 400}} className = "w-100 text"> Create Key  </Button>
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