import React, { Component } from "react";

//you can also write it here export default
class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    ); //jsx expression which calls React.createElement, so you have to import
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
