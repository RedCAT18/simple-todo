import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

import Todo from "../components/Todo";
import "./Home.css";

function Home({ todos, addTodo, setTodo }) {
  const [text, setText] = useState("");

  // console.log(todos);
  useEffect(() => {
    if (todos.length === 0) {
      const savedTodos = JSON.parse(localStorage.getItem("todos"));
      if (savedTodos) setTodo(savedTodos);
    }
    // return () => localStorage.setItem("todos", todos);
  }, []);

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (text.length !== 0) {
      addTodo(text, todos);
      setText("");
    }
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do</h1>
      <form className="todo__form" onSubmit={onSubmit}>
        <input
          className="todo__input"
          type="text"
          value={text}
          onChange={onChange}
        />
        <button className="todo__btn">Add</button>
      </form>
      <p className="todo__note">Click each todo if you want to see detail.</p>
      <ul className="todo__lists">
        {todos.map(todo => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text, todos) => dispatch(actionCreators.addTodo(text, todos)),
    setTodo: todos => dispatch(actionCreators.setTodo(todos))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
