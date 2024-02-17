import { ChakraProvider } from '@chakra-ui/react';

import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import ContactsPage from 'pages/Contacts/Contacts';
import LogInPage from 'pages/LogIn/LogIn';
import SignUpPage from 'pages/SignUp/SignUp';

const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};

export default App;
