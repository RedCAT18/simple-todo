import { createStore } from "redux";

const SET = "SET";
const ADD = "ADD";
const DELETE = "DEETE";
const CHECK = "CHECK";

const setTodo = todos => {
  return {
    type: SET,
    todos
  };
};

const checkTodo = todo => {
  todo.done = !todo.done;
  // console.log(todo);
  return {
    type: CHECK,
    todo
  };
};

const addTodo = (text, todos) => {
  const addedTodo = { text, id: Date.now(), done: false };
  todos.unshift(addedTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  // console.log("1: ", store.getState());
  return {
    type: ADD,
    addedTodo
  };
};

const deleteTodo = id => {
  const currentTodos = store.getState();
  const deletedTodos = currentTodos.filter(todo => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(deletedTodos));
  return {
    type: DELETE,
    id: parseInt(id)
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET:
      return [...action.todos, ...state];
    case ADD:
      // console.log("2: ", state);
      return [...state];
    case CHECK:
      return [state.filter(todo => todo.id !== action.todo.id), action.todo];
    case DELETE:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  setTodo,
  addTodo,
  checkTodo,
  deleteTodo
};

export default store;
