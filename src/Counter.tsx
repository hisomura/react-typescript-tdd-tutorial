import React, { Component } from "react";

type Props = { label?: string };

class Counter extends Component<Props> {
  render() {
    const { label = "Counter" } = this.props;
    return (
      <div>
        <label htmlFor="counter">{label}</label>
        <span id="counter" role="counter">
          1
        </span>
      </div>
    );
  }
}

export default Counter;
