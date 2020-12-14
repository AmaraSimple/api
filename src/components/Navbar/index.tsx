import React, { useState, useEffect } from 'react';

import logo from '../../assets/img/fav.png';
import {
  Container,
  Nav,
  NavLink,
  NavItem,
  NavBrandImg,
  NavLinkDirect,
} from './styled';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {
  FaEnvira,
  FaDiscord,
  FaHome,
  FaComment,
  FaSignInAlt,
  FaColumns,
} from 'react-icons/fa';
import Sidebar from '../Sidebar';

import { isAuthenticated } from '../../auth';

function Navbar() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    function authVerify() {
      if (isAuthenticated()) {
        return setAuth(true);
      } else if (isAuthenticated() === null) {
        return setAuth(false);
      } else {
        return setAuth(false);
      }
    }
    authVerify();
  }, [auth]);

  return (
    <Container>
      <Nav>
        <Sidebar />
        <NavItem>
          <NavBrandImg src={logo} alt="logo vintage" />
        </NavItem>

        <NavItem visible={auth === true ? false : true}>
          <FaColumns />
          &nbsp;
          <NavLink to="/dashboard">DASHBOARD</NavLink>
        </NavItem>

        <NavItem visible={auth}>
          <FaHome />
          &nbsp;
          <NavLink to="/">HOME</NavLink>
        </NavItem>
        <NavItem visible={auth}>
          <FaComment />
          &nbsp;
          <NavLink to="/sobre">SOBRE</NavLink>
        </NavItem>
        <NavItem>
          <FaDiscord />
          &nbsp;
          <NavLinkDirect href="https://discord.gg/KaJVyTpBrR" target="_blank">
            DISCORD
          </NavLinkDirect>
        </NavItem>
        <NavItem visible>
          <FaEnvira />
          &nbsp;
          <NavLink to="/plataformas">PLATAFORMAS</NavLink>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem visible={auth}>
          <FaSignInAlt />
          &nbsp;
          <NavLink to="/entrar">ENTRAR</NavLink>
        </NavItem>

        <NavItem>
          <ColorModeSwitcher />
        </NavItem>
      </Nav>
    </Container>
  );
}

export default Navbar;
