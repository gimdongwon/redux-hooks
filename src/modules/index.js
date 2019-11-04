import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import todos from "./todos";

import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([counterSaga()]);
}

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;
