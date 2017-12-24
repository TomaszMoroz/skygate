import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import points from './reducers/pointsReducer'
import makers from './reducers/makersReducer'



export default createStore(
    combineReducers({
        points,
        makers
        
    }), applyMiddleware(thunk)
);