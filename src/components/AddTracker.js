import React, { useState } from "react"
import { Card, Button, Alert, Navbar } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Header from "./Header";

export default function AddTracker() {
  const [error, setError] = useState("")
  const { currentUser, logout} = useAuth()
  const { authorization } = useAuth()
  const navigate = useNavigate();

  async function handleLogout() {
    setError("")

    try {
      navigate("/")
    } catch {
      setError("Failed to log out")
    }
  }

  async function handleAuthorization(e) {
    e.preventDefault()

    try {
    setError("")
    const response = await authorization()
    console.log(response.authorization_url)
    window.location.replace(response.authorization_url)
    } catch {
    setError("Failed to authorize")
    }
}

  return (
    <>
    <Navbar>
        <Header />
      </Navbar>

      <Card style = {{padding: 70}}>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {/* <Link to="/mismatcherror" className="btn btn-primary w-100 mt-3">
            Add Tracker
          </Link> */}
          <Button onClick={handleAuthorization} className="w-100" type="submit">
              Add Tracker
          </Button>
          {/* <Button onClick = {() => navigate("/invaliderror")} className = "w-100 text" >Demo Error Page</Button> */}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}