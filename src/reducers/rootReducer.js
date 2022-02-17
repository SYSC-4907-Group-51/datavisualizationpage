import { AccessKey } from './AccessKey';
import { combineReducers } from "redux";

// File which encapsulates all reducers just add the fields to root reducer
const rootReducer = combineReducers({
    storeAccess: AccessKey,
    
})

export default rootReducer;