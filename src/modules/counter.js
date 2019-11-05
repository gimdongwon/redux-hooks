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

// put : 새 액션을 dispatch 한다.

function* incrementAsyncSaga() {
  yield delay(3000);
  yield put(increment());
}

function* decrementAsyncSaga() {
  yield delay(3000);
  yield put(decrement());
}

// takeEvery : 특정 액션을 모니터링 하고, 발생하면 특정 함수를 발생시킨다.
// conterSaga는 takeEvery을 통해 액션을 바라보고 액션이
// dispatch 될때마다 incrementAsync를
// 실행하기 위해 redux-saga 패키지가 제공하는 takeEvery 헬퍼 함수를 사용한다.

export function* counterSaga() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsyncSaga);
  yield takeEvery(DECREMENT_ASYNC, decrementAsyncSaga);
}

export default handleActions(
  {
    [INCREMENT]: state => state + 1,
    [DECREMENT]: state => state - 1
  },
  0
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
