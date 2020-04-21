import { GET_INITIAL_DATA } from '../actions/shared';

export const loadingReducer = (state=true, action) => {
  if (action.type === GET_INITIAL_DATA) {
    return !state;
  }
  return state;
}