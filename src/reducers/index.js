import { combineReducers } from 'redux';
import CounterReducer from './counter';
import Logged from './logged';


const Reducers = combineReducers({
    counter: CounterReducer,
    isLogged: Logged
})
export default Reducers;