import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { actionCreators } from "../store";

import "./Detail.css";

const Detail = ({ todo, check }) => {
  const param = useParams();
  if (!todo) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    // console.log(todos);
    // console.log(id);
    todo = todos.filter(t => t.id === parseInt(param.id))[0];
  }

  const convertDate = d => {
    const date = new Date(d);
    return date.toString().slice(0, 24);
  };

  const checkedTodo = todo.done ? "todo_done" : "";

  return (
    <div className="detail__container">
      <div className="detail__board">
        <h2 className="detail__text">{todo?.text}</h2>
        <h4 className="detail__time">
          {" "}
          Created at : {todo?.id ? convertDate(todo.id) : ""}
        </h4>
        <button
          className={`detail__check todo__btn ${checkedTodo}`}
          disabled={todo.done}
          onClick={todo => check(todo)}
        >
          Done
        </button>
        <p className="detail__link">
          <Link to="/">Go back to main</Link>
        </p>
      </div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const {
    history,
    match: {
      params: { id }
    }
  } = ownProps;

  return { todo: state.find(todo => todo.id === parseInt(id)), history };
}

function mapDispatchToProps(dispatch) {
  return { check: todo => dispatch(actionCreators.checkTodo(todo)) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
