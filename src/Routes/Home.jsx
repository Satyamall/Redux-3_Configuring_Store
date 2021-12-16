import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";

function Home() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h3>{token}</h3>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export { Home };
