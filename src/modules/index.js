import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import todos, { todoSaga } from "./todos";

import { all } from "redux-saga/effects";

// all : Saga를 여러 개를 묶어서 사용할 때 all Effect를 사용한다.

export function* rootSaga() {
  yield all([counterSaga(), todoSaga()]);
}

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;
