import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavbarAuth = () => {
  return (
    <>
      <Nav.Link as={NavLink} to="login">
        Log In
      </Nav.Link>
      <Nav.Link as={NavLink} to="signup">
        Sign Up
      </Nav.Link>
    </>
  );
};

export default NavbarAuth;
