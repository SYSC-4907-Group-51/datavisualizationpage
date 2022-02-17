import React from "react";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; 
import rootReducer from './reducers/rootReducer';
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
 
 
// const persistConfig = {
//     key: 'authType',
//     storage: storage,
//     whitelist: ['authType'] // which reducer want to store
//   };
 
// const persistedReducer = persistReducer(persistConfig, rootReducer);
 
// //const store = createStore(persistedReducer, state,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 

// export default () => {
//     let store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//     let persistor = persistStore(store);
//     return { store, persistor };
//   };
const persistConfig = {
    key: 'authType',
    storage: storage,
    whitelist: ['authType'] // which reducer want to store
  };
  const pReducer = persistReducer(persistConfig, rootReducer);
  // const middleware = applyMiddleware(thunk, logger);
  const store = createStore(pReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  const persistor = persistStore(store);
  export  { persistor, store };
