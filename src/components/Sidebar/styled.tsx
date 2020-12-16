import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: none;

  @media (max-width: 620px) {
    display: flex;
  }
`;

interface ISideItemStyle {
  visible?: boolean;
}

const SideItem = styled('div')<ISideItemStyle>`
  align-items: center;

  font-size: 16pt !important;

  display: ${(props) => (props.visible ? ' none' : 'flex')};
`;

const SideLinkRedirect = styled.a``;

const SideLink = styled(Link)``;

const ImgPerfil = styled.img`
  width: 25px;
  border-radius: 12.5px;
`;

export { Container, SideLink, SideItem, SideLinkRedirect, ImgPerfil };
