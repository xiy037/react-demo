import API from 'goals-todos-api';

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

const addTodo = (todo) => ({
  type: ADD_TODO,
  todo
});

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})


export const handleAddTodo = (name, cb) => {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo));
        cb();
      })
      .catch((err) => {
        console.log("error: ", err);
        alert('There was an error. Try again.');
      });
  }
}

export const handleDeleteTodo = (todo) => {
  return (dispatch) => {
    dispatch(deleteTodo(todo.id));
    return API.deleteTodo(todo.id).catch(() => {
      alert("Cannot delete todo, try again");
      dispatch(addTodo(todo));
    });
  }
}

export const handleToggleTodo = (id) => (dispatch) => {
  dispatch(toggleTodo(id));
  return API.saveTodoToggle(id).catch(()=> {
    alert("Cannot change complete status, try again");
    dispatch(toggleTodo(id));
  })
}