import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

import "./Todo.css";

const Todo = ({ id, text, done, onBtnClick }) => {
  const askDelete = () => {
    if (window.confirm("Do you really want to delete this?")) {
      onBtnClick();
    }
  };

  const checkedTodo = done ? "todo__line" : "";

  return (
    <li className="todo__list">
      <Link className="todo__link" to={`/${id}`}>
        <span className={checkedTodo}>{text} </span>
      </Link>{" "}
      <button className="todo__btn" onClick={askDelete}>
        Delete
      </button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Todo);
