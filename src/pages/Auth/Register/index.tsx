import React from 'react';
import {
  Container,
  Header,
  Logo,
  Painel,
  Title,
  Content,
  Left,
  Right,
  Info,
  LinkR,
} from './styled';

import logo from '../../../assets/img/fav.png';

import AuthNavbar from '../../../components/AuthNavbar';
import Footer from '../../../components/Footer';

import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from '@chakra-ui/react';

function Register() {
  return (
    <>
      <AuthNavbar />
      <Container>
        <Painel>
          <Header>
            <Logo src={logo} alt="logo vintage" />
            <Title>Faça seu Cadastro</Title>
          </Header>
          <Content>
            <Left>
              <FormControl id="text">
                <FormLabel>Nome</FormLabel>
                <Input type="text" />
                <FormHelperText>Insirar seu nome completo.</FormHelperText>
              </FormControl>
              <FormControl id="Password" style={{ marginTop: '8px' }}>
                <FormLabel>E-mail</FormLabel>
                <Input type="Password" />
                <FormHelperText>
                  Insirar seu e-mail que funcione.
                </FormHelperText>
              </FormControl>
              <FormControl id="Password" style={{ marginTop: '8px' }}>
                <FormLabel>Confirmar E-mail</FormLabel>
                <Input type="Password" />
                <FormHelperText>
                  Confirme seu e-mail que funcione.
                </FormHelperText>
              </FormControl>
            </Left>
            <Right>
              <FormControl id="text">
                <FormLabel>Username</FormLabel>
                <Input type="text" />
                <FormHelperText>Insirar nome de usuário válido.</FormHelperText>
              </FormControl>
              <FormControl id="Password" style={{ marginTop: '8px' }}>
                <FormLabel>Senha Secreta</FormLabel>
                <Input type="password" />
                <FormHelperText>Sua senha secreta</FormHelperText>
              </FormControl>
              <FormControl id="Password" style={{ marginTop: '8px' }}>
                <FormLabel>Confirme sua senha</FormLabel>
                <Input type="password" />
                <FormHelperText>Confirme sua senha secreta</FormHelperText>
              </FormControl>
            </Right>
          </Content>
          <Info>
            <LinkR to="/entrar" style={{ marginRight: '30px' }}>
              Já tenho uma conta
            </LinkR>
            <Button>Cadastrar</Button>
          </Info>
        </Painel>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
