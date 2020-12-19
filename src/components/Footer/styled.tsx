import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #0c0e1b !important;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  padding: 40px;

  background: #0c0e1b !important;

  @media (max-width: 620px) {
    width: 100%;
    padding: 15px 40px 15px 40px;
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #dddccc;
  }
`;

const LinkR = styled(Link)`
  font-size: 16pt;
  font-weight: 700px;

  &:hover {
    color: #dddccc;
  }

  @media (max-width: 620px) {
    font-size: 12pt;
  }
`;

const LinkRedirect = styled.a`
  font-size: 16pt;
  font-weight: 700px;

  @media (max-width: 620px) {
    font-size: 12pt;
  }
`;

const Copyright = styled.p`
  display: flex;
  text-align: center;

  padding: 20px;

  @media (max-width: 620px) {
    padding: 10px;
  }
`;

export { Container, Option, LinkR, LinkRedirect, Copyright, Menu };
