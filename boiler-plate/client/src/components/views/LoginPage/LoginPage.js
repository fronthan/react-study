import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

import NavBar from '../NavBar/NavBar';

function LoginPage(props) {
  const dispatch = useDispatch("");

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const EmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const PasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("error");
      }
    });
  };

  return (
    <>
    <NavBar/>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={SubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={EmailHandler} />
        <label>password</label>
        <input type="password" value={Password} onChange={PasswordHandler} />
        <button>로그인</button>
      </form>
    </div>
    </>
  );
}

export default withRouter(LoginPage);
