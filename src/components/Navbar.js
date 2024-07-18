import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">ColorBet</Logo>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/betting">Bet</MenuItem>
        <MenuItem to="/login">Login</MenuItem>
        <MenuItem to="/register">Register</MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled(Link)`
  margin-left: 1rem;
  color: #fff;
  text-decoration: none;
`;

export default Navbar;
