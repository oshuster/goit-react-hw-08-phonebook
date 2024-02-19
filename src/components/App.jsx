import { useDispatch } from 'react-redux';
import { current } from '../redux/auth/auth-operations';
import { useEffect } from 'react';

import AppRoutes from './AppRoutes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <AppRoutes />;
};

export default App;
