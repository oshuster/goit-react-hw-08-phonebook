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

const Header = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <Navbar expand="lg" className={`bg-body-tertiary ${styles.mb}`}>
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          Phonebook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavbarMenu />
            <NavbarAuth />
            {isLogin && <UserMenu />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
