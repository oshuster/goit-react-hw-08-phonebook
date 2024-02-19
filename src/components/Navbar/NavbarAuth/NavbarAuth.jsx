import { Flex, Spacer } from '@chakra-ui/react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavbarAuth = () => {
  return (
    <>
      <Nav.Link as={NavLink} to="login">
        LogIn
      </Nav.Link>
      <Nav.Link as={NavLink} to="signup">
        SignUp
      </Nav.Link>
    </>
  );
};

export default NavbarAuth;
