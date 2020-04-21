import React from 'react';
import List from './List';
import { handleAddGoal, handleDeleteGoal } from '../actions/goals'

class Goals extends React.Component {
  addGoalItem = () => {
    const name = this.input.value;
    this.props.store.dispatch(handleAddGoal(name, () => {this.input.value = ''}));
  }
 
  deleteGoalItem = (goal) => {
    this.props.store.dispatch(handleDeleteGoal(goal));
  }

  render() {
    const goals = this.props.store.getState().goals;
    return (
      <div>
         <h2>Goals List</h2>
        <input type="text" placeholder="Add goal" ref={el => this.input=el}/>
        <input type="button" value="add"  onClick={this.addGoalItem}/>
        <List items={goals} deleteItem={this.deleteGoalItem}/>
      </div>
    )
  }
}

export default Goals;