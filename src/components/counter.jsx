import React, { Component } from "react";

//you can also write it here export default
class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    // means it will always bind with the object
  }

  handleIncrement() {
    console.log("Increment clicked!", this);
  }

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    ); //jsx expression which calls React.createElement, so you have to import
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
