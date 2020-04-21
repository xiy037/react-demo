import { combineReducers } from 'redux';
import { todoReducer } from './todos';
import { goalReducer } from './goals';

const rootReducer = combineReducers({
  todos: todoReducer,
  goals: goalReducer
});

export default rootReducer;