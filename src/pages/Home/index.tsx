import React from 'react';

import { Container, SubTitle, Title, Right, Left, Img, Text } from './styled';
import Navbar from '../../components/Navbar';
import logo from '../../assets/img/fav.png';

function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Left>
          <Img src={logo} alt="logo vintage" />
        </Left>
        <Right>
          <Title>VintAGe Studio</Title>
          <Text>
            Studio de Desenvolvimento em plataformas ligadas ao jogo Grand Theft
            Auto. Não temos nenhuma ligação ou vínculo com a Rockstar Games.
          </Text>
          <SubTitle>&copy; Copyright 2020 - Vintage Studio</SubTitle>
        </Right>
      </Container>
    </>
  );
}

export default Home;
