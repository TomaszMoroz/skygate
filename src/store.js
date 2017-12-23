import { createStore, combineReducers } from 'redux';
import points from './reducers/pointsReducer'


export default createStore(
    combineReducers({
        points
    })
);