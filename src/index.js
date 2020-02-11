import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// import { createStore } from "redux";

// const plus = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// number.innerText = 0;

// //action types
// const ADD = "ADD";
// const MINUS = "MINUS";

// //reducer : only changes state through actions
// const countModifier = (count = 0, action) => {
//   //modify state
//   //return : data(state) in application
//   switch (action.type) {
//     case "ADD":
//       return count + 1;
//     case "MINUS":
//       return count - 1;
//     default:
//       return count;
//   }
// };

// const countStore = createStore(countModifier);

// const onChange = () => {
//   // console.log(countStore.getState());
//   number.innerText = countStore.getState();
// };
// countStore.subscribe(onChange);

// const handleAdd = () => {
//   countStore.dispatch({ type: ADD });
// };
// const handleMinus = () => {
//   countStore.dispatch({ type: MINUS });
// };

// plus.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const addTodo = text => {
//   return { type: ADD_TODO, text };
// };

// const deleteTodo = id => {
//   return { type: DELETE_TODO, id };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE_TODO:
//       return state.filter(toDo => toDo.id !== parseInt(action.id));
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// const dispatchAddTodo = text => {
//   store.dispatch(addTodo(text));
// };

// const dispatchDeleteTodo = e => {
//   const id = parseInt(e.target.parentNode.id);
//   store.dispatch(deleteTodo(id));
// };

// const paintTodos = () => {
//   const toDos = store.getState();
//   ul.innerHTML = "";
//   toDos.forEach(toDo => {
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "Del";
//     btn.addEventListener("click", dispatchDeleteTodo);
//     li.id = toDo.id;
//     li.innerText = toDo.text;
//     li.appendChild(btn);
//     ul.appendChild(li);
//   });
// };

// store.subscribe(paintTodos);

// // const createTodo = todo => {
// //   const li = document.createElement("li");
// //   li.innerText = todo;
// //   ul.appendChild(li);
// // };

// const onSubmit = e => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   dispatchAddTodo(toDo);
// };

// form.addEventListener("submit", onSubmit);
