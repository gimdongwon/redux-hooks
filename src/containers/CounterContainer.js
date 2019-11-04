import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Counter from "../components/Counter";
import { incrementAsync, decrementAsync } from "../modules/counter";

const CounterContainer = () => {
  const count = useSelector(state => {
    return state.counter;
  });
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(incrementAsync());
  };
  const decrementCounter = () => {
    dispatch(decrementAsync());
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
