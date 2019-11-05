import { createAction, handleActions } from "redux-actions";
import { call, delay, put, takeEvery } from "redux-saga/effects";

// call : 첫 번째 파라미터로 전달한 함수에 그 뒤에 있는 파라미터들은 전달하여 호출해준다.
// 이를 사용하면 나중에 테스트를 작성할 때 용이하게 사용된다.

const CREATE = "todos/CREATE";
const DELETE = "todos/DELETE";
const TOGGLE = "todos/TOGGLE";
const CREATE_ASYNC = "CREATE_ASYNC";
const DELETE_ASYNC = "DELETE_ASYNC";
const TOGGLE_ASYNC = "TOGGLE_ASYNC";

// export const createTodo = text => ({ type: CREATE, payload: text });
// export const deleteTodo = id => ({ type: DELETE, payload: id });
// export const toggleTodo = id => ({ type: TOGGLE, payload: id });

export const createTodo = createAction(CREATE, text => text);
export const deleteTodo = createAction(DELETE, id => id);
export const toggleTodo = createAction(TOGGLE, id => id);
export const createTodoAsync = createAction(CREATE_ASYNC, text => text);
export const deleteTodoAsync = createAction(DELETE_ASYNC, id => id);
export const toggleTodoAsync = createAction(TOGGLE_ASYNC, id => id);

const initialState = [
  { id: 1, text: "Learn Redux", done: true },
  { id: 2, text: "create Todo", done: false },
  { id: 3, text: "go home", done: false }
];

function* createTodoAsyncSaga(value) {
  yield delay(3000);
  yield put(createTodo(value.payload));
}
function* deleteTodoAsyncSaga(id) {
  yield delay(3000);
  yield put(deleteTodo(id.payload));
}
function* toggleTodoAsyncSaga(id) {
  yield delay(3000);
  yield put(toggleTodo(id.payload));
}

export function* todoSaga() {
  yield takeEvery(CREATE_ASYNC, createTodoAsyncSaga);
  yield takeEvery(DELETE_ASYNC, deleteTodoAsyncSaga);
  yield takeEvery(TOGGLE_ASYNC, toggleTodoAsyncSaga);
}

export default handleActions(
  {
    [CREATE]: (state, action) => {
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false
      });
    },
    [DELETE]: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    [TOGGLE]: (state, action) => {
      return state.map(item => {
        return item.id === action.payload
          ? { ...item, done: !item.done }
          : item;
      });
    }
  },
  initialState
);

// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case CREATE:
//       const nextId = Math.max(...state.map(todo => todo.id)) + 1;
//       return state.concat({
//         id: nextId,
//         text: action.payload,
//         done: false
//       });
//     case DELETE:
//       return state.filter(item => item.id !== action.payload);
//     case TOGGLE:
//       return state.map(item => {
//         return item.id === action.payload
//           ? { ...item, done: !item.done }
//           : item;
//       });
//     default:
//       return state;
//   }
// };

// export default todos;
