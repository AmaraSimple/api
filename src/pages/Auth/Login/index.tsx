import React from 'react';

import { Container, Painel, Logo, Title, Infos, LinkR } from './styled';
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
import { FaSignInAlt } from 'react-icons/fa';

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
            <LinkR style={{ marginRight: '30px' }} to="/cadastrar">
              Criar conta
            </LinkR>

            <Button leftIcon={<FaSignInAlt />} size="md">
              Entrar
            </Button>
          </Infos>

          <LinkR to="/esqueci-senha">Esqueci a senha</LinkR>
        </Painel>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
