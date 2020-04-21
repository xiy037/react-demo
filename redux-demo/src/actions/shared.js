import API from 'goals-todos-api'

export const GET_INITIAL_DATA = "GET_INITIAL_DATA";

const getInitialData = (todos, goals) => ({
  type: GET_INITIAL_DATA,
  todos,
  goals
});

export const handleInitialData = () => {
  return (dispatch) => {
    return Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([ todos, goals ]) => {
      dispatch(getInitialData(todos, goals));
    })
  }
}

