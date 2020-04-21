import API from 'goals-todos-api';

export const ADD_GOAL = "ADD_GOAL";
export const DELETE_GOAL = "DELETE_GOAL";
export const TOGGLE_GOAL = "TOGGLE_GOAL";

const addGoal = (goal) => ({
  type: ADD_GOAL,
  goal
});

const deleteGoal = (id) => ({
  type: DELETE_GOAL,
  id
})


export const handleAddGoal = (name, cb) => (dispatch) => {
  return API.saveGoal(name)
    .then((goal) => {
      dispatch(addGoal(goal));
      cb();
    }).catch(() => alert("error, cannot save goal. try again!"));
}

export const handleDeleteGoal = (goal) => (dispatch) => {
  dispatch(deleteGoal(goal.id));
  return API.deleteGoal(goal.id).catch(() => {
    dispatch(addGoal(goal))
    alert('An error occurred. Try again.');
  });
}
