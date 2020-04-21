import React from 'react';
import Todos from './Todos';
import Goals from './Goals';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
       <h1>Todo-Goal-demo</h1>
        <Todos />
        <Goals />
      </div>
    );
  }
  
}

export default connect(null)(App);
