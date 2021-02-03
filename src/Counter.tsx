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

  incrementCounter(event: React.MouseEvent<HTMLSpanElement>) {
    const inc = event.shiftKey ? 10 : 1;
    this.setState((prev) => ({ count: prev.count + inc }));
  }

  render() {
    const { label = "Counter" } = this.props;
    return (
      <div>
        <label htmlFor="counter">{label}</label>
        <span id="counter" role="counter" onClick={this.incrementCounter.bind(this)}>
          {this.state.count}
        </span>
      </div>
    );
  }
}

export default Counter;
