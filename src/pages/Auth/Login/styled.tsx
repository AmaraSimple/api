import styled from 'styled-components';
import colors from '../../../components/colors';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 90px;

  @media (max-width: 620px) {
    padding: 10px;
  }
`;

const Painel = styled.div`
  width: 40%;
  padding: 40px;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #0c0e1b !important;

  @media (max-width: 620px) {
    width: 100%;
    padding: 10px;
    margin-top: 80px;
    margin-bottom: 30px;
  }
`;

const Logo = styled.img`
  width: 90px;
  border-radius: 45px;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border: 2px solid white;

  margin-bottom: 15px;
`;

const Title = styled.span`
  font-size: 16pt;
  margin-bottom: 15px;
`;

const Infos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 25px;
  margin-bottom: 15px;
`;

const LinkR = styled(Link)`
  font-size: 14pt;
  &:hover {
    color: #ddd;
  }
`;

export { Container, Painel, Logo, Title, Infos, LinkR };
