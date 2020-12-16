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
import colors from '../../../components/colors';

function Login(props: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [text, setText] = useState('Preenchar corretamente os campos abaixo.');
  const [alertStatus, setAlertStatus] = useState('info');
  const [loading, setLoading] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setLoading(true);
      setSendEmail(false);
      setText('Comunicando com o banco de dados.');
      setAlertStatus('info');

      const response = await api.post('/login', { username, password });
      console.log(response);
      setText('Verificando integradades das informações.');

      if (response.data.error === '03') {
        setUsername('');
        setPassword('');
        setAlertStatus('error');
        setText('Usuário inserido não existe na nossa base de dados.');

        return setLoading(false);
      } else if (response.data.error === '07') {
        setPassword('');
        setAlertStatus('warning');
        setText('Usuário ou senha incorreta.');

        return setLoading(false);
      } else if (response.data.error === '08') {
        setPassword('');
        setAlertStatus('info');
        setSendEmail(true);
        setText('E-mail não confirmado!');

        return setLoading(false);
      }
      setAlertStatus('success');
      setText('Entrando...');

      login(response.data.token);
      localStorage.setItem('username-vintage-studio', username);
      localStorage.setItem('email-vintage-studio', response.data.email);
      localStorage.setItem('photo-vintage-studio', response.data.photo);
      localStorage.setItem('name-vintage-studio', response.data.name);

      return props.history.push('/dashboard');
    } catch (e) {
      setPassword('');
      setAlertStatus('warning');
      setText('Usuário ou senha incorreta.');

      return setLoading(false);
    }
  }

  async function handleSenEmail() {
    setLoading(true);
    setSendEmail(false);
    setText('Enviando email de confirmação, aguarde...');
    setAlertStatus('warning');

    try {
      const response = await api.post(`/sendactive/${username}`);

      if (response.data.msg) {
        setText('E-mail enviado com sucesso, verifique a caixa de entrada.');
        setAlertStatus('success');
        setLoading(false);
      }

      return;
    } catch (e) {
      setText('Error ao enviar o email de confirmação.');
      setAlertStatus('error');
      setLoading(false);
      setSendEmail(true);
      return;
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
            <Alert
              status="warning"
              style={{ marginBottom: '15px', color: 'gray' }}
            >
              <AlertIcon />
              {text}
            </Alert>
          ) : alertStatus === 'error' ? (
            <Alert
              status="error"
              style={{ marginBottom: '15px', color: 'gray' }}
            >
              <AlertIcon />
              {text} &nbsp;
              {sendEmail ? (
                <Button size="sm" onClick={() => handleSenEmail()}>
                  Reenviar E-mail?
                </Button>
              ) : (
                ''
              )}
            </Alert>
          ) : (
            <Alert
              status="info"
              style={{ marginBottom: '15px', color: 'gray' }}
            >
              <AlertIcon />
              {text} &nbsp;{' '}
              {sendEmail ? (
                <Button size="sm" onClick={() => handleSenEmail()}>
                  Reenviar E-mail?
                </Button>
              ) : (
                ''
              )}
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
                isRequired
              />
              <FormHelperText>Nome de usuário cadastrado.</FormHelperText>
            </FormControl>

            <FormControl id="Password" style={{ marginTop: '8px' }}>
              <FormLabel>Senha Secreta</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isRequired
              />
              <FormHelperText>Sua senha secreta</FormHelperText>
            </FormControl>

            <Infos>
              <LinkR style={{ marginRight: '30px' }} to="/cadastrar">
                Criar conta
              </LinkR>

              <Button
                leftIcon={<FaSignInAlt />}
                size="md"
                type="submit"
                colorScheme="Blue.400"
              >
                Entrar
              </Button>
            </Infos>
          </form>
          <LinkR to="/esqueci-senha">Esqueceu a senha? Clique aqui</LinkR>
        </Painel>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
