import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
    // obj.method();
    // function();
  };

  render() {
    return (
      <div>
        <h4> Counter {this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={(product) => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDelete}
          className="btn btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    const x = <h1 style={{ fontSize: "20px" }}>Zero</h1>;
    return count == 0 ? x : count;
  }
}

export default Counter;
