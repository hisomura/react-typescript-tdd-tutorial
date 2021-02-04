import React, { Component, useCallback, useState } from "react";

type Props = { label?: string; start?: number };
const initialState = { count: 0 };
type CounterState = Readonly<typeof initialState>;

const Counter: React.FC<Props> = ({ label = "Counter", start }) => {
  const [state, setState] = useState<CounterState>({ count: start ?? 0 });

  const incrementCounter = useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      const inc = event.shiftKey ? 10 : 1;
      setState((prev) => ({ count: prev.count + inc }));
    },
    []
  );

  return (
    <div>
      <label htmlFor="counter">{label}</label>
      <span id="counter" role="counter" onClick={incrementCounter}>
        {state.count}
      </span>
    </div>
  );
};

export default Counter;
