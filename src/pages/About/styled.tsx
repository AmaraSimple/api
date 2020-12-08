import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sobre = styled.div`
  width: 50%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 45pt;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 30px;
`;

const Text = styled.span`
  text-align: center;

  font-size: 15.9pt;
  font-weight: 500;
`;

const Img = styled.img`
  width: 120px;
  border-radius: 60px;
  margin-right: 15px;
`;

export { Container, Title, Text, Sobre, Img };
