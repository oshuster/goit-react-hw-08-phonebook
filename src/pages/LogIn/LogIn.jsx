import LogInForm from 'components/LogInForm/LogInForm';

import styles from './login.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

const LogInPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(logIn(data));
  };

  return (
    <div className={styles.container}>
      <LogInForm onSubmit={handleLogin} />
    </div>
  );
};

export default LogInPage;
