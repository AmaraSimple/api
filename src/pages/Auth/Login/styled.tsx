import styled from 'styled-components';
import colors from '../../../components/colors';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;

  padding: 90px;
`;

const Painel = styled.div`
  width: 40%;
  padding: 60px;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  border: 2.5px solid ${colors.third} !important;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  justify-content: space-between;
  align-items: center;

  margin-top: 25px;
`;

const Info = styled.div``;

const LinkR = styled(Link)``;

export { Container, Painel, Logo, Title, Infos, LinkR, Info };
