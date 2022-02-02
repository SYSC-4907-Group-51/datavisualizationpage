export default function reducer(state = [], action){
    switch (action.type){
        case "storeAccess":
            return [
                ...state,
                {
                    access: action.payload.access
                }
            ];
        default: 
            return state;
    }

}