import { ADD_TODO, DELETE_TODO, SAVE_TODO, UPDATE_TODO } from "./types";

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};
export const saveTodo = (todoToUpdate) => {
  return {
    type: SAVE_TODO,
    payload: todoToUpdate,
  };
};
export const updateTodo = (updated) => {
  return {
    type: UPDATE_TODO,
    payload: updated,
  };
};
