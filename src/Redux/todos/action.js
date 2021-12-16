import { ADD_TODO } from "./actionTypes";

// action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  };
};
