import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
    // obj.method();
    // function();
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formtCount()}</span>
        <button
          onClick={(product) => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formtCount() {
    const { count } = this.state;
    const x = <h1 style={{ fontSize: "20px" }}>Zero</h1>;
    return count == 0 ? x : count;
  }
}

export default Counter;
