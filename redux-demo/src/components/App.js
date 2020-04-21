import React from 'react';
import Todos from './Todos';
import Goals from './Goals';
import { handleInitialData } from '../actions/shared';

class App extends React.Component {
  componentDidMount() {
    this.props.store.subscribe(() => this.forceUpdate());
    this.props.store.subscribe(() => console.log(this.props.store.getState()));
    this.props.store.dispatch(handleInitialData());
  }

  render() {
    const store = this.props.store;
    return (
      <div className="App">
       <h1>Todo-Goal-demo</h1>
        <Todos store={store}/>
        <Goals store={store}/>
      </div>
    );
  }
  
}

export default App;
