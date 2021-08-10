import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

const TodoItem = ({ todo }) => {
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(todo.title);
  return (
    <div className="row my-3 ">
      <div className="col-7 d-flex justify-content-start d-flex align-items-center">
        {update ? (
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h6>{todo.title}</h6>
        )}
      </div>
      <div className="col-5 d-flex justify-content-end">
        <button
          className="btn btn-danger mx-1"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                title,
              })
            );
            if (update) {
              setTitle(todo.title);
            }
            setUpdate(!update);
          }}
        >
          {update ? "Save" : "Update"}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

// Menit 38
