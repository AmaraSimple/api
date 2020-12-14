import React, { useState } from 'react';

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
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { FaSignInAlt } from 'react-icons/fa';
import api from '../../../api';
import { login } from '../../../auth';
import { Loading } from '../../../components/Animation';

function Login(props: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [text, setText] = useState('Preenchar corretamente os campos abaixo.');
  const [alertStatus, setAlertStatus] = useState('info');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setLoading(true);
      setText('Comunicando com o banco de dados.');
      setAlertStatus('info');

      const response = await api.post('/login', { username, password });

      setText('Verificando integradades das informações.');

      if (response.data.error === '03') {
        setUsername('');
        setPassword('');
        setAlertStatus('error');
        setText('Usuário inserido não existe na nossa base de dados.');

        return setLoading(false);
      }
      setAlertStatus('success');
      setText('Entrando...');
      login(response.data.token);
      localStorage.setItem('username-vintage-studio', username);

      return props.history.push('/dashboard');
    } catch (e) {
      setPassword('');
      setAlertStatus('warning');
      setText('Usuário ou senha incorreta.');

      return setLoading(false);
    }
  }

  return (
    <>
      <AuthNavbar />
      <Container>
        <Painel>
          <Logo src={logo} alt="logo vintage" />
          <Title>Acessa sua Conta</Title>

          {alertStatus === 'warning' ? (
            <Alert status="warning" style={{ marginBottom: '15px' }}>
              <AlertIcon />
              {text}
            </Alert>
          ) : alertStatus === 'error' ? (
            <Alert status="error" style={{ marginBottom: '15px' }}>
              <AlertIcon />
              {text}
            </Alert>
          ) : (
            <Alert status="info" style={{ marginBottom: '15px' }}>
              <AlertIcon />
              {text}
            </Alert>
          )}

          <Loading status={loading} />
          <form
            onSubmit={(e) => handleSubmit(e)}
            style={{
              width: '100%',
              display: loading ? 'none' : 'flex',
              flexDirection: 'column',
            }}
          >
            <FormControl id="text">
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormHelperText>Nome de usuário cadastrado.</FormHelperText>
            </FormControl>

            <FormControl id="Password" style={{ marginTop: '8px' }}>
              <FormLabel>Senha Secreta</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormHelperText>Sua senha secreta</FormHelperText>
            </FormControl>

            <Infos>
              <LinkR style={{ marginRight: '30px' }} to="/cadastrar">
                Criar conta
              </LinkR>

              <Button leftIcon={<FaSignInAlt />} size="md" type="submit">
                Entrar
              </Button>
            </Infos>
          </form>
        </Painel>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
