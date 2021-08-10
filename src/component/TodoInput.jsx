import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const handleSubmit = (event) => {
    dispatch(addTodo({ id: uuid(), title }));
    event.preventDefault();
    setTitle();
  };
  return (
    <form onSubmit={title && handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => setTitle(e.target.value)}
          value={title || ""}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
