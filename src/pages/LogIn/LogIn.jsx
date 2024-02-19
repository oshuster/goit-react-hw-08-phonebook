import LogInForm from 'components/LogInForm/LogInForm';

import styles from './login.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import DividerComponent from 'components/Divider/Divider';
import {
  setIdAction,
  setIsEditAction,
} from '../../redux/contacts/contactsSlice';

const LogInPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(logIn(data));
    dispatch(setIsEditAction(false));
    dispatch(setIdAction(''));
  };

  return (
    <div className={styles.container}>
      <DividerComponent text="Login" />
      <LogInForm onSubmit={handleLogin} />
    </div>
  );
};

export default LogInPage;
