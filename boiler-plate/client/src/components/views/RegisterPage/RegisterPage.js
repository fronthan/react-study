import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from "../../../_actions/user_action";
import {withRouter } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';

function RegisterPage(props) {
    const dispatch = useDispatch("");

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const EmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const NameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const ConfirmPasswordHandler = (event) => {
        setconfirmPassword(event.currentTarget.value);
    }

    const PasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const SubmitHandler = (event) => {
        event.preventDefault();
        
        if (Password !== confirmPassword) {
            return alert("비밀번호 2가지가 같아야 합니다.")
        }

        let body = {
            email: Email,
            name: Name,
            password: Password
        }
        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success) {
                props.history.push('/login')
            } else {
                alert('회원가입에 실패했습니다.')
            }
        });
    }


  return (
    <>
    <NavBar />
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
        <label>이름</label>
        <input type="text" value={Name} onChange={NameHandler} />
        <label>password</label>
        <input type="password" value={Password} onChange={PasswordHandler} />
        <label>confirm password</label>
        <input type="password" value={confirmPassword} onChange={ConfirmPasswordHandler} />
        <button>회원가입</button>
      </form>
    </div>
    </>
  );
}

export default withRouter(RegisterPage);
