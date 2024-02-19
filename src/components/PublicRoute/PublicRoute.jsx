import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Loader from 'components/Loader/Loader';

import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
