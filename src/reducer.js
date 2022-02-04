export default function reducer(state = [], action){
    switch (action.type){
        case "storeAccess":
            return [
                ///...state,
                state = action.payload.access,
                // {
                //     access: action.payload.access
                // }
            ];
        default: 
            return state;
    }

}