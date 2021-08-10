import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";
import { todos } from "./states";

export const reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    case UPDATE_TODO:
      newTodos = [...state];

      // Algoritma ke 1
      let index = newTodos.findIndex((value) => value.id === action.payload.id);
      if (index !== -1) {
        newTodos[index] = action.payload;
        return newTodos;
      }

      // Algoritma Gagal
      // const Todo = newTodos.map((obj) =>
      //   obj.id === action.payload.id
      //     ? { ...obj, title: action.payload.itle }
      //     : obj
      // );
      // console.log(Todo);

      // Algoritma ke 2
      // let index = -1;
      // for (let i = 0; i < newTodos.length; i++) {
      //   index++;
      //   if (newTodos[i].id === action.payload.id) {
      //     break;
      //   }
      // }
      // console.log(newTodos);
      // if (index !== -1) {
      //   newTodos[index] = action.payload;
      //   return newTodos;
      // }

      break;
    default:
      return state;
  }
};
