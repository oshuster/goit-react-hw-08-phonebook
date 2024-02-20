import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import ContactsPage from 'pages/Contacts/Contacts';
import LogInPage from 'pages/LogIn/LogIn';
import SignUpPage from 'pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import NotFoundPage from 'pages/NotFound/NotFound';

const AppRoutes = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="login" element={<LogInPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};

export default AppRoutes;
