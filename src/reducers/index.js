import { combineReducers } from 'redux';
import CounterReducer from './counter';
import Logged from './logged';
import Sidebar from './toggle-sidebar'


const Reducers = combineReducers({
    counter: CounterReducer,
    isLogged: Logged,
    toggleSidebar : Sidebar 
})
export default Reducers;