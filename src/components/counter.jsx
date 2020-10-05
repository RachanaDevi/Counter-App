import React, { Component } from "react";

//you can also write it here export default
class Counter extends Component {
  state = {
    count: 1,
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-2">
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
