import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: none;

  @media (max-width: 620px) {
    display: flex;
  }
`;

const SideItem = styled.div`
  display: flex;
  align-items: center;

  font-size: 16pt !important;
`;

const SideLinkRedirect = styled.a``;

const SideLink = styled(Link)``;

export { Container, SideLink, SideItem, SideLinkRedirect };
