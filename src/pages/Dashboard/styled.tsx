import styled from 'styled-components';
import colors from '../../components/colors';

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Painel = styled.div`
  width: 60%;
  padding: 30px;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  border: 2px solid ${colors.third};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 620px) {
    width: 90%;
  }
`;

const Title = styled.span`
  font-size: 19pt;
  text-align: center;

  margin-bottom: 40px;

  @media (max-width: 620px) {
    font-size: 14pt;
  }
`;

const Ip = styled.span`
  margin-top: 40px;
`;

export { Container, Painel, Title, Ip };
