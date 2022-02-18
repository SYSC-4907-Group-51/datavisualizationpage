import React, { useContext, useState, useEffect } from "react"
// import { store } from "../index";
import { store } from "../App";
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()


  async function makeRequest(method, endpoint, need_auth, body) {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    headers.append("Accept", "application/json")
    if (need_auth) {
      const state = store.getState();
      headers.append("Authorization", `Bearer ${state.storeAccess[0].data.access}`)
    }
    try {
       
      const response = await fetch(`https://cap-api.gura.ch/${endpoint}`, {
        method,
        headers,
        body: JSON.stringify(body) || undefined,
      })
      const data = await response.json()
      const status_code = response.status
      return {
        data,
        status_code
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function signup(username, password, firstname, lastname, email) {
    const endpoint = 'user/register'
    
    return await makeRequest('POST', endpoint, false, {
      username,
      password,
      firstname,
      lastname,
      email
    })
  }

  async function deleteAccount(password) {
    const endpoint = 'user/delete'

    return await makeRequest('DELETE', endpoint, true, {
      password
    })
  }

  async function authorization() {
    const endpoint = 'tracker/auth'
    return makeRequest('POST', endpoint, true, {})
  }


  async function login(username, password) {
    const endpoint = 'user/login'
    return await makeRequest('POST', endpoint, false, {
      username,
      password
    })
  }

  async function logout() {
    const endpoint = 'user/logout'
    return await makeRequest('POST', endpoint, true, {})
  }

  async function createKey(steps, heartrate, sleep, stepsintraday, heartrateintraday) {
    const endpoint = 'visualize/create-key'
    return await makeRequest('POST', endpoint, true, {
      "notes": "3tet",
      "permissions": [
        steps,
        heartrate,
        sleep,
        stepsintraday,
        heartrateintraday
      ]
    })
  }



  const value = {
    currentUser,
    login,
    signup,
    deleteAccount,
    authorization,
    logout,
    createKey
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}