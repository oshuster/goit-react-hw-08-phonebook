import LogInForm from 'components/LogInForm/LogInForm';

import styles from './login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import { selectIsLogin } from '../../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

const LogInPage = () => {
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(logIn(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={styles.container}>
      <LogInForm onSubmit={handleLogin} />
    </div>
  );
};

export default LogInPage;
