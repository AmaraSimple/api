import styled from 'styled-components';
import colors from '../../../components/colors';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Painel = styled.div`
  width: 70%;
  padding: 30px;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  border: 3px solid ${colors.third};

  margin-top: 80px;

  @media (max-width: 620px) {
    width: 90%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;
`;

const Logo = styled.img`
  width: 100px;
  border-radius: 50px;
  border: 2px solid #fff;
  margin-bottom: 9px;
`;

const Title = styled.span`
  font-size: 16pt;
  font-weight: 500;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 100%;
`;

const Right = styled.div`
  width: 100%;
  margin-left: 30px;

  @media (max-width: 620px) {
    margin-left: 0;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 35px;
`;

const LinkR = styled(Link)`
  &:hover {
    color: #ddd;
  }
`;

export {
  Container,
  Painel,
  Header,
  Logo,
  Title,
  Content,
  Left,
  Right,
  Info,
  LinkR,
};
