const pointsReducer = (state = {
    result: 0
    
    
}, action) => {
    switch (action.type){
        case 'HANDLE_CLICK':
            state = {
                ...state,
                result: state.result + action.payload
            };
        break;

        case 'GRANDMA':
            state = {
            ...state,
            result: state.result + action.payload
        };
            break;

        case 'FARM':
            state = {
            ...state,
            result: state.result + action.payload
        };
            break;

        case 'MINE':
            state = {
            ...state,
            result: state.result + action.payload
        };
            break;

        case 'FACTORY':
            state = {
            ...state,
            result: state.result + action.payload
        };
            break;
        default: state ={...state};
       
    }

    return state;
};

export default pointsReducer;