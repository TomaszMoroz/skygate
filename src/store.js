import { createStore, combineReducers } from 'redux';
import points from './reducers/pointsReducer'
// import makers from './reducers/makersReducer'


export default createStore(
    combineReducers({
        points,
        // makers
    })
);