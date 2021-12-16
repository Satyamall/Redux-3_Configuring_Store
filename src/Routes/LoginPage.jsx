import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Login } from "../Components/Login";
import { loginFailure, loginSuccess } from "../Redux/auth/action";

function LoginPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const handleLogin = ({ email, password }) => {
    // fake auth
    if (email === "admin" && password === "admin") {
      const action = loginSuccess("fakeToken");
      dispatch(action);
    } else {
      const action = loginFailure("wrong credentials");
      dispatch(action);
    }
  };
  if (isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
}

export { LoginPage };
