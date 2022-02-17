import React, { useEffect } from 'react';
import Signup from "./components/Signup";
import { Container } from 'react-bootstrap'
//import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./components/Dashboard2";
import Login from "./components/Login";
import MismatchError from './components/MismatchError'
import InvalidTokenError from './components/InvalidTokenError'
import { AuthProvider } from "./contexts/AuthContext";
import MyAccount from "./components/MyAccount";
import Share from "./components/Share";
import Logs from "./components/Logs";
// import ErrorPage from "./Pages/ErrorPage";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducers/rootReducer";


// Redux Persist configuration 
const persistConfig = {
  key: 'storeAccess',
  version: 1,
  storage,
};
const pReducer = persistReducer(persistConfig, rootReducer);
//  const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store);


// Acessing local storage 
const tempLS = JSON.parse(window.localStorage.getItem("loginResp"));

const App = () => {

  // occurs throughout all components, on refresh persist data from local storage 
  useEffect(() => {
     
    console.log(tempLS)
    if(tempLS){
      store.dispatch({
        type: "resfreshedStoreAccess",
        payload: {
          data: {
            username: tempLS.data.username,
            first_name: tempLS.data.first_name,
            last_name: tempLS.data.last_name,
            email: tempLS.data.email,
            created_at: tempLS.data.created_at,
            updated_at: tempLS.data.updated_at,
            refresh: tempLS.data.refresh,
            access: tempLS.data.access,
        },
        status_code: tempLS.status_code
        }
      });
    }
    
    // saves whole login response 
    //type: "resfreshedStoreAccess"
    
   
    const state = store.getState();
    // console.log(state.storeAccess[0].data.access);
  });


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>


        <AuthProvider>
          <Container className="d-flex algin-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Router>
                <Routes>

                  <Route path="/signup" element={<Signup />} />
                  <Route path="/" element={<Login />} />
                  <Route path="/share" element={<Share />} />
                  <Route path="/account" element={<MyAccount />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/mismatcherror" element={<MismatchError />} />
                  <Route path="/invaliderror" element={<InvalidTokenError />} />
                  <Route path="/logs" element={<Logs />} />


                  {/* <Route path = "*" element = {<ErrorPage />}/> */}
                </Routes>
              </Router>

            </div>

          </Container>
        </AuthProvider>
      </PersistGate>
    </Provider>



  );

};

export default App;
export { store, persistor };