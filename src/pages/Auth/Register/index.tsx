import React, { useState } from 'react';
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
import api from '../../../api';
import { Loading } from '../../../components/Animation';

import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { FaRegistered } from 'react-icons/fa';

function Register(props: any) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const [text, setText] = useState('Preenchar corretamente os campos abaixo.');
  const [alertStatus, setAlertStatus] = useState('info');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setLoading(true);
      setText('Comunicando com o banco de dados.');
      setAlertStatus('info');

      const response = await api.post('/user', {
        username,
        email,
        emailConfirm: confirmEmail,
        name,
        password,
        passwordConfirm: confirmPassword,
      });
      setText('Verificando integradades das informações.');

      if (response.data.error === '05') {
        setEmail('');
        setConfirmEmail('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');

        setText('Usuário e e-mail já cadastrado.');
        setAlertStatus('error');
        setLoading(false);
        return;
      } else if (response.data.error === '01') {
        setEmail('');
        setConfirmEmail('');
        setPassword('');
        setConfirmPassword('');

        setText('E-mails não estão iguais, insirar novamente.');
        setAlertStatus('warning');
        setLoading(false);

        return;
      } else if (response.data.error === '02') {
        setPassword('');
        setConfirmPassword('');
        setAlertStatus('warning');
        setText('Senhas não estão iguais, insirar novamente.');
        setLoading(false);

        return;
      }

      setAlertStatus('info');
      setText('Cadastrado com sucesso.');
      setLoading(false);

      return props.history.push('/entrar');
    } catch (e) {
      setPassword('');
      setConfirmPassword('');
      setAlertStatus('error');
      setText(
        'Entre em contato com a administração em nosso discord. Sistema temporariamente indisponível.'
      );
      setLoading(false);
      return;
    }
  }
  return (
    <>
      <AuthNavbar />
      <Container>
        <Painel>
          <Header>
            <Logo src={logo} alt="logo vintage" />
            <Title>Faça seu Cadastro</Title>
          </Header>

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
              {text}
            </Alert>
          ) : (
            <Alert
              status="info"
              style={{ marginBottom: '15px', color: 'gray' }}
            >
              <AlertIcon />
              {text}
            </Alert>
          )}

          <Loading status={loading} />
          <form
            onSubmit={(e) => handleSubmit(e)}
            style={{
              display: loading ? 'none' : 'flex',
              flexDirection: 'column',
            }}
          >
            <Content>
              <Left>
                <FormControl id="text">
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isRequired
                  />
                  <FormHelperText>Insirar seu nome completo.</FormHelperText>
                </FormControl>
                <FormControl id="email" style={{ marginTop: '8px' }}>
                  <FormLabel>E-mail</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isRequired
                  />
                  <FormHelperText>
                    Insirar seu e-mail que funcione.
                  </FormHelperText>
                </FormControl>
                <FormControl id="confirmEmail" style={{ marginTop: '8px' }}>
                  <FormLabel>Confirmar E-mail</FormLabel>
                  <Input
                    type="email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    isRequired
                  />
                  <FormHelperText>
                    Confirme seu e-mail que funcione.
                  </FormHelperText>
                </FormControl>
              </Left>
              <Right>
                <FormControl id="text">
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    isRequired
                  />
                  <FormHelperText>
                    Insirar nome de usuário válido.
                  </FormHelperText>
                </FormControl>
                <FormControl id="password" style={{ marginTop: '8px' }}>
                  <FormLabel>Senha Secreta</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isRequired
                  />
                  <FormHelperText>Sua senha secreta</FormHelperText>
                </FormControl>
                <FormControl id="confirmPassword" style={{ marginTop: '8px' }}>
                  <FormLabel>Confirme sua senha</FormLabel>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    isRequired
                  />
                  <FormHelperText>Confirme sua senha secreta</FormHelperText>
                </FormControl>
              </Right>
            </Content>
            <Info>
              <LinkR to="/entrar" style={{ marginRight: '30px' }}>
                Já tenho uma conta
              </LinkR>
              <Button
                type="submit"
                leftIcon={<FaRegistered />}
                colorScheme="#0A0B16"
              >
                Cadastrar
              </Button>
            </Info>
          </form>
        </Painel>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
