import { useDispatch } from 'react-redux';
import { current } from '../redux/auth/auth-operations';
import { useEffect } from 'react';
import styles from './app.module.css';

import AppRoutes from './AppRoutes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <AppRoutes />
    </div>
  );
};

export default App;
