import React from 'react';
import { Container, Title, Text, Sobre, Img } from './styled';
import Navbar from '../../components/Navbar';
import logo from '../../assets/img/fav.png';

function About() {
  return (
    <>
      <Navbar />
      <Container>
        <Sobre>
          <Title>
            <Img src={logo} alt="logo vintage" />
            Sobre
          </Title>
          <Text>
            Somos uma equipe indepedente, que busca trazer uma nova mentalidade
            e funcionalidade que aprimorem a jogabilidade, onde o foco principal
            é no game Grand Theft Auto da Rockstar Games, inicialmente na
            Plataforma Multi Theft Auto e posteriomente em outras por exemplo
            FIVEM e SA-MP.
          </Text>
        </Sobre>
      </Container>
    </>
  );
}

export default About;
