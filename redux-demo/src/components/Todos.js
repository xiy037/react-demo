import React from 'react';
import List from './List';
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from '../actions/todos';

class Todos extends React.Component {
 
 addTodoItem = () => {
   const name = this.input.value;
   this.props.store.dispatch(handleAddTodo(name, () => {this.input.value = ''}));
 }

 deleteTodoItem = (todo) => {
   this.props.store.dispatch(handleDeleteTodo(todo));
 }

 toggleTodoItem = (id) => {
   this.props.store.dispatch(handleToggleTodo(id));
 }

  render() {
    const todos = this.props.store.getState().todos;
    return (
      <div>
        <h2>Todo List</h2>
        <input type="text" placeholder="Add todo" ref={(el) => this.input=el}/>
        <input type="button" value="add" onClick={this.addTodoItem}/>
        <List items={todos} deleteItem={this.deleteTodoItem} toggleItem={this.toggleTodoItem}/>
      </div>
    )
  }
}

export default Todos;