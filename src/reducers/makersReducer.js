const makersReducer = (state = {
    grandmas: 0,
    farms: 0,
    mines: 0,
    factories: 0
}, action) => {
    switch (action.type){
       

        case 'GRANDMA':
            state = {
            ...state,
            grandmas: state.grandmas + 1
        };
            break;

        case 'FARM':
            state = {
            ...state,
            farms: state.farms + 1
        };
            break;

        case 'MINE':
            state = {
            ...state,
            mines: state.mines + 1
        };
            break;

        case 'FACTORY':
            state = {
            ...state,
            factories: state.factories + 1
        };
            break;
        
        default: state = {...state};
    }

    return state;
};

export default makersReducer;