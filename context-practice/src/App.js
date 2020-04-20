import React from 'react';
const MyContext = React.createContext();

function Parent() {
  return (
    <div>
      <h1>Parent Node</h1>
      <Child />
    </div>
  )
}

function Child() {
  return (
    <div>
      <h2>Child Node</h2>
      <GrandChild />
    </div>
  )
}

function GrandChild() {
  return (
    <MyContext.Consumer>
      {name => (
        <div>
          <h3>GrandChild</h3>
          <div>{name}</div>
          <div>{name}</div>
        </div>
      )}
    </MyContext.Consumer>

  )
}

class App extends React.Component {
  render() {
    const name="Alex";
    return (
      <div className="App">
        App
        <MyContext.Provider value={name}>
          <Parent />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
