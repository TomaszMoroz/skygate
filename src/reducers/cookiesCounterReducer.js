const cookiesCounterReducer = (state = {
    result: 0
}, action) => {
    switch(action.type){
        case 'HANDLE_CLICK':
            state = {
                ...state,
                result: result += action.payload
            };
        break;

        case 'GRANDMA':
            state = {
            ...state,
            result: result += action.payload
        };
            break;

        case 'FARM':
            state = {
            ...state,
            result: result += action.payload
        };
            break;

        case 'MINE':
            state = {
            ...state,
            result: result += action.payload
        };
            break;

        case 'FACTORY':
            state = {
            ...state,
            result: result += action.payload
        };
            break;
        
        return state;
    }
};

export default cookiesCounterReducer;