import React from 'react';
import List from './List';
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from '../actions/todos';
import { connect } from 'react-redux';

class Todos extends React.Component {
 
 addTodoItem = () => {
   const name = this.input.value;
   this.props.dispatch(handleAddTodo(name, () => {this.input.value = ''}));
 }

 deleteTodoItem = (todo) => {
   this.props.dispatch(handleDeleteTodo(todo));
 }

 toggleTodoItem = (id) => {
   this.props.dispatch(handleToggleTodo(id));
 }

  render() {
    const todos = this.props.todos;
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

export default connect(state => ({
  todos: state.todos
}))(Todos);