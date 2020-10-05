import React, { Component } from "react";

//you can also write it here export default
class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    
    return (
      <React.Fragment>
        <span style={{ fontSize: 30 }} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    ); //jsx expression which calls React.createElement, so you have to import
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
