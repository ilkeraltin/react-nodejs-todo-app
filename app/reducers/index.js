import { combineReducers } from 'redux';
import TaskReducer from './taskReducer';



const rootReducer = combineReducers({
  state: TaskReducer
});

export default rootReducer;
