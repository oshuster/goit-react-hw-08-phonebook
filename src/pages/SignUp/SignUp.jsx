import SignUpForm from 'components/SignUpForm/SignUpForm';
import Loader from 'components/Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signUp } from '../../redux/auth/auth-operations';
import {
  selectIsLoading,
  selectIsLogin,
} from '../../redux/auth/auth-selectors';

import styles from './signup.module.css';
import { useState } from 'react';

const SignUpPage = () => {
  const authLoading = useSelector(selectIsLoading);
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(signUp(data));
  };

  if (isLogin) {
    return <Navigate to="contacts" />;
  }

  return (
    <div className={styles.container}>
      <SignUpForm onSubmit={handleSubmit} />
      {authLoading && <Loader />}
    </div>
  );
};

export default SignUpPage;
