import React from "react"
import Signup from "./components/Signup";
import { Container } from 'react-bootstrap'
//import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./components/Dashboard2";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";
// import ErrorPage from "./Pages/ErrorPage";


const  App = () => {
  return (
    <AuthProvider>
      <Container className = "d-flex algin-items-center justify-content-center" 
    style = {{minHeight: "100vh"}}
    >
      <div >
        <Router> 
          <Routes>

            <Route path = "/signup" element = {<Signup />}/>
            <Route path = "/" element = {<Login />}/>
            <Route path = "/dashboard" element = {<Dashboard />}/>
            {/* <Route path = "*" element = {<ErrorPage />}/> */}
          </Routes>
        </Router> 
        
      </div>
      
    </Container>

    </AuthProvider>
   
  );
    
};

export default App