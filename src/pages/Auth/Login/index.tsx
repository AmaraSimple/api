import React from 'react';

import { Container, Painel, Logo, Title, Infos, LinkR, Info } from './styled';
import Footer from '../../../components/Footer';
import AuthNavbar from '../../../components/AuthNavbar';
import logo from '../../../assets/img/fav.png';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from '@chakra-ui/react';

function Login() {
  return (
    <>
      <AuthNavbar />
      <Container>
        <Painel>
          <Logo src={logo} alt="logo vintage" />
          <Title>Acessa sua Conta</Title>

          <FormControl id="text">
            <FormLabel>Username</FormLabel>
            <Input type="text" />
            <FormHelperText>Nome de usuário cadastrado.</FormHelperText>
          </FormControl>

          <FormControl id="Password" style={{ marginTop: '8px' }}>
            <FormLabel>Senha Secreta</FormLabel>
            <Input type="Password" />
            <FormHelperText>Sua senha secreta</FormHelperText>
          </FormControl>

          <Infos>
            <Info>
              <LinkR to="/cadastrar">Criar conta.</LinkR>
            </Info>
            <Info>
              <Button>Entrar</Button>
            </Info>
          </Infos>
        </Painel>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
