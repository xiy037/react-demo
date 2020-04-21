import React from 'react';
import List from './List';
import { handleAddGoal, handleDeleteGoal } from '../actions/goals';
import { connect } from 'react-redux';

class Goals extends React.Component {
  addGoalItem = () => {
    const name = this.input.value;
    this.props.dispatch(handleAddGoal(name, () => {this.input.value = ''}));
  }
 
  deleteGoalItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal));
  }

  render() {
    const goals = this.props.goals;
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

export default connect(state => ({
  goals: state.goals
}))(Goals);