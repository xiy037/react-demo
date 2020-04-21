import { combineReducers } from 'redux';
import { todoReducer } from './todos';
import { goalReducer } from './goals';
import { loadingReducer } from './loading';

const rootReducer = combineReducers({
  todos: todoReducer,
  goals: goalReducer,
  loading: loadingReducer
});

export default rootReducer;