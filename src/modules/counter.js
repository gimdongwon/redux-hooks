import { delay } from "redux-saga/effects";
import { put, takeEvery } from "redux-saga/effects";
import { handleActions, createAction } from "redux-actions";

const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const INCREMENT_ASYNC = "INCREMENT_ASYNC";
const DECREMENT_ASYNC = "DECREMENT_ASYNC";

// export const increment = () => ({ type: INCREASE });
// export const decrement = () => ({ type: DECREASE });
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const incrementAsync = createAction(INCREMENT_ASYNC);
export const decrementAsync = createAction(DECREMENT_ASYNC);

function* incrementAsyncSaga() {
  yield delay(3000);
  yield put(increment());
}

function* decrementAsyncSaga() {
  yield delay(3000);
  yield put(decrement());
}

export function* counterSaga() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsyncSaga);
  yield takeEvery(DECREMENT_ASYNC, decrementAsyncSaga);
}

export default handleActions(
  {
    [INCREMENT]: state => state + 1,
    [DECREMENT]: state => state - 1
  },
  1
);

// const initialState = {
//   count: 0
// };

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// export default counter;
