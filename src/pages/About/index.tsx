import React from 'react';
import { Container, Title, Text, Sobre, Img } from './styled';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
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
            Somos uma equipe independente, que busca trazer uma nova mentalidade
            e funcionalidade que aprimorem a jogabilidade, onde o foco principal
            é no game Grand Theft Auto da Rockstar Games, inicialmente na
            Plataforma Multi Theft Auto e posteriormente em outras por exemplo
            FIVEM e SA-MP.
          </Text>
        </Sobre>
      </Container>
      <Footer />
    </>
  );
}

export default About;
