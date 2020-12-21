import React, { useState, useEffect } from 'react';

import logo from '../../assets/img/logo.png';
import {
  Container,
  Nav,
  NavLink,
  NavItem,
  NavBrandImg,
  NavLinkDirect,
  ImgPerfil,
} from './styled';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {
  FaUserAstronaut,
  FaEnvira,
  FaDiscord,
  FaHome,
  FaComment,
  FaSignInAlt,
  FaSignOutAlt,
} from 'react-icons/fa';
import Sidebar from '../Sidebar';

import { isAuthenticated, logout } from '../../auth';

function Navbar() {
  const [auth, setAuth] = useState(false);
  //const [photo, setPhoto] = useState('');

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
  }, []);

  return (
    <Container>
      <Nav>
        <Sidebar />
        <NavItem>
          <NavBrandImg src={logo} alt="logo vintage" />
        </NavItem>

        <NavItem visible={auth === true ? false : true}>
          <FaHome />
          &nbsp;
          <NavLink to="/dashboard">DASHBOARD</NavLink>
        </NavItem>

        <NavItem visible={auth === true ? false : true}>
          <FaUserAstronaut />
          &nbsp;
          <NavLink to="/ucp">UCP</NavLink>
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

        <NavItem visible={auth === true ? false : true}>
          <FaSignOutAlt />
          &nbsp;
          <NavLink to="/entrar" onClick={() => logout()}>
            SAIR
          </NavLink>
        </NavItem>
      </Nav>
    </Container>
  );
}

export default Navbar;
