import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { selectIsLogin } from '../../../redux/auth/auth-selectors';

const NavbarMenu = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <>
      <Nav.Link as={NavLink} to="/">
        Home
      </Nav.Link>
      {isLogin && (
        <Nav.Link as={NavLink} to="contacts">
          Contacts
        </Nav.Link>
      )}
    </>
  );
};

export default NavbarMenu;
