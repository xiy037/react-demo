import React from 'react';
import './App.css';
import Todos from './components/Todos';
import StatCard from './components/StatCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Redux Saga Demo
      </header>
      <div className="statistics-wrapper">
        <StatCard title="Todo" total={2}/>
        <StatCard title="Done" total={1}/>
      </div>
      <Todos />
    </div>
  );
}

export default App;
