const makersReducer = (state = {
    grandmas: 0,
    farms: 0,
    mines: 0,
    factories: 0
}, action) => {
    switch(action.type){
       

        case 'GRANDMA':
            state = {
            ...state,
            grandmas: grandmas += 1
        };
            break;

        case 'FARM':
            state = {
            ...state,
            farms: farms += 1
        };
            break;

        case 'MINE':
            state = {
            ...state,
            mines: mines += 1
        };
            break;

        case 'FACTORY':
            state = {
            ...state,
            factories: factories += 1
        };
            break;
        
        return state;
    }
};

export default makersReducer;