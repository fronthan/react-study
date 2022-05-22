import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));

  //인풋 변경 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value
      })
    );
  };

  //폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      //TODO: 오류처리
      return;
    }
    dispatch(register({ username, password }));
  };

  useEffect(()=> {//컴포넌트가 처음 렌더링될 때 form을 초기화한다
    dispatch(initializeForm('register'));
  }, [dispatch]);

  //회원가입 성공 실패 처리
  useEffect(()=> {
    if(authError) {
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if(auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);
  
  useEffect(()=> {
    if(user) {
      history.push('/');
      console.log(user)
    }
  }, [history, user]);

  return (
    <AuthForm type="register"
      form={form}
       onChange={onChange} 
       onSubmit={onSubmit}
    />
  )
}

export default withRouter(RegisterForm);