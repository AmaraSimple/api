import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 90px;
  line-height: 90px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  position: fixed;
  top: 0;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 35px 0 35px;

  list-style: none;

  font-size: 14.5pt;
`;

const LinkR = styled(Link)``;

const LinkRedirect = styled.a``;

export { Container, Item, LinkR, LinkRedirect };
