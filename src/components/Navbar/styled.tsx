import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 65px;
  line-height: 65px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  position: fixed;
  top: 0;

  background: #0c0e1b !important;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 35px 0 35px;

  list-style: none;
`;

interface INavItemStyle {
  visible?: boolean;
}

const NavItem = styled('li')<INavItemStyle>`
  margin-left: 17px;

  display: ${(props) => (props.visible ? ' none' : 'flex')};
  justify-content: center;
  align-items: center;

  font-size: 12pt;
  font-weight: 500;

  &:hover {
    color: #ddd;
  }

  @media (max-width: 620px) {
    display: none;
  }
`;

const NavLink = styled(Link)``;

const NavLinkDirect = styled.a``;

const NavBrandImg = styled.img`
  width: 90px;
`;

const ImgPerfil = styled.img`
  width: 38px;
  border-radius: 19px;
`;

export {
  Container,
  Nav,
  NavItem,
  NavLink,
  NavBrandImg,
  NavLinkDirect,
  ImgPerfil,
};
