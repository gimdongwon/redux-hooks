import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Counter from "../components/Counter";
import { increment, decrement } from "../modules/counter";

const CounterContainer = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment());
  };
  const decrementCounter = () => {
    dispatch(decrement());
  };
  return (
    <Counter
      number={count}
      onIncrease={incrementCounter}
      onDecrease={decrementCounter}
    />
  );
};

export default CounterContainer;
