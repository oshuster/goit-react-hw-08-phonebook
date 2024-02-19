import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './navbar.module.css';
import { selectIsLogin } from '../../redux/auth/auth-selectors';
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Phonebook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavbarMenu />
          </Nav>
          <Nav>
            {!isLogin && <NavbarAuth />}
            {isLogin && <UserMenu />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
