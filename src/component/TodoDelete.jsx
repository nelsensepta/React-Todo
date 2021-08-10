import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";
import { useSelector } from "react-redux";

const TodoDelete = ({ todoId }) => {
  const dispatch = useDispatch();
  console.log(todoId);

  return (
    <div
      className="modal fade"
      id="deleteData"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Delete data
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">Yakin data Ini Akan Dihapus</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              //   onClick={dispatch(deleteTodo(todoId))}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDelete;
