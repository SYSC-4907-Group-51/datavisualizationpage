export const AccessKey = (state = [], action) => {
    switch (action.type) {
        case "storeAccess":
            return [
                ///...state,
                state = action.payload,
                // {
                //     access: action.payload.access
                // }
            ];
            // same functionality different context 
            // not needed but looks more clear in redux dev tool 
        case "resfreshedStoreAccess":
            return [
                state = action.payload,
            ];
        default:
            return state;
    }

}