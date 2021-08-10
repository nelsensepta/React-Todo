// import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

const App = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 justify-content-center my-5">
          <h3 className="text-center">Todo List</h3>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
