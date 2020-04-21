import {GET_INITIAL_DATA} from '../actions/shared';
import {ADD_GOAL, DELETE_GOAL} from '../actions/goals';


export const goalReducer = (state=[], action) => {
  switch(action.type) {
    case GET_INITIAL_DATA:
      return action.goals;
    case ADD_GOAL:
      return state.concat([action.goal]);
    case DELETE_GOAL:
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
}