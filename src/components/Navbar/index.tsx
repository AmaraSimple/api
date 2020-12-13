import React from 'react';

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
} from 'react-icons/fa';
import Sidebar from '../Sidebar';

const bg = localStorage.getItem('chakra-ui-color-mode');

function Navbar() {
  return (
    <Container background={bg}>
      <Nav>
        <Sidebar />
        <NavItem>
          <NavBrandImg src={logo} alt="logo vintage" />
        </NavItem>
        <NavItem>
          <FaHome />
          &nbsp;
          <NavLink to="/">HOME</NavLink>
        </NavItem>
        <NavItem>
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
        <NavItem>
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
