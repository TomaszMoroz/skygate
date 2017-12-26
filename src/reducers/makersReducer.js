const makersReducer = (state = {
    grandmas: 0,
    farms: 0,
    mines: 0,
    factories: 0
}, action) => {
    switch (action.type){
       

        case 'addGRANDMA':
            state = {
            ...state,
            grandmas: state.grandmas + 1
        };
            break;

        case 'addFARM':
            state = {
            ...state,
            farms: state.farms + 1
        };
            break;

        case 'addMINE':
            state = {
            ...state,
            mines: state.mines + 1
        };
            break;

        case 'addFACTORY':
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