import {GET_INITIAL_DATA} from '../actions/shared';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/todos';


export const todoReducer = (state=[], action) => {
  switch(action.type) {
    case GET_INITIAL_DATA:
      return action.todos;
    case ADD_TODO:
      return state.concat([action.todo]);
    case DELETE_TODO:
      return state.filter((el) => el.id !== action.id);
    case TOGGLE_TODO:
      return state.map(el => el.id !== action.id ? el :
        Object.assign({}, el, {complete: !el.complete}));
    default:
      return state;
  }
}