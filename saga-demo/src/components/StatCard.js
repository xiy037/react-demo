import React from 'react';

class StatCard extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="card-container">
        <h2>{this.props.title}</h2>
        <div>{this.props.total}</div>
      </div>
    );
  }
}

export default StatCard;