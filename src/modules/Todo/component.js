import React from "react";
import PropTypes from "prop-types";

export const Component = ({ onClickDelete, text }) => {
  return (
    <div className="todo-item">
      {text}
      <span onClick={onClickDelete}>&times;</span>
    </div>
  );
};

Component.propTypes = {
  onClickDelete: PropTypes.func,
  text: PropTypes.string
};