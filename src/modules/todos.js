const CREATE = "todos/CREATE";
const DELETE = "todos/DELETE";
const TOGGLE = "todos/TOGGLE";

export const createTodo = text => ({ type: CREATE, payload: text });
export const deleteTodo = id => ({ type: DELETE, payload: id });
export const toggleTodo = id => ({ type: TOGGLE, payload: id });

const initialState = [
  { id: 1, text: "Learn Redux", done: true },
  { id: 2, text: "create Todo", done: false },
  { id: 3, text: "go home", done: false }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false
      });
    case DELETE:
      return state.filter(item => item.id !== action.payload);
    case TOGGLE:
      return state.map(item => {
        return item.id === action.payload
          ? { ...item, done: !item.done }
          : item;
      });
    default:
      return state;
  }
};

export default todos;
