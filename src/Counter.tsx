import React, { Component } from "react";

type Props = { label?: string; start?: number };
const initialState = { count: 0 };
type CounterState = Readonly<typeof initialState>;

class Counter extends Component<Props, CounterState> {
  readonly state: CounterState = initialState;

  componentDidMount() {
    if (this.props.start) {
      this.setState({ count: this.props.start });
    }
  }

  render() {
    const { label = "Counter" } = this.props;
    return (
      <div>
        <label htmlFor="counter">{label}</label>
        <span id="counter" role="counter">
          {this.state.count}
        </span>
      </div>
    );
  }
}

export default Counter;
