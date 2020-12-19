import React, { useState } from 'react';
import { Container, Painel, Logo, Title, Infos, LinkR } from './styled';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

import { FaKey } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import logo from '../../assets/img/fav.png';
import api from '../../api';
import { Loading } from '../../components/Animation';

function ChangePassword(props: any) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [alertStatus, setAlertStatus] = useState('');
  const [text, setText] = useState('Insirar sua nova senha nos campos abaixo.');

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setAlertStatus('info');
    setText('Comunicando com a base de dados...');

    try {
      const { token, id } = props.match.params;
      const response = await api.post('/changepassword', {
        password,
        confirmPassword,
        token,
        id,
      });

      if (response.data.error === '09') {
        setAlertStatus('error');
        setText('Você não solicitou alteração da sua senha.');
        setPassword('');
        setConfirmPassword('');

        setTimeout(() => {
          setText('Redirecionando para página de recuperação!');
          setLoading(false);
        }, 2000);

        props.history.push('/esqueci-senha');
        return;
      } else if (response.data.error === '10') {
        setAlertStatus('error');
        setText('Token atual está invalido.');

        setTimeout(() => {
          setText('Redirecionando para página de recuperação!');
        }, 2000);

        setTimeout(() => {
          props.history.push('/esqueci-senha');
          setPassword('');
          setConfirmPassword('');
          setLoading(false);
        }, 4500);
        return;
      } else if (response.data.error === '08') {
        setAlertStatus('error');
        setText('Sua conta não está ativada.');
        setPassword('');
        setConfirmPassword('');

        setTimeout(() => {
          setText('Redirecionando para página de recuperação!');
          setLoading(false);
        }, 2000);

        setTimeout(() => {
          props.history.push('/esqueci-senha');
        }, 6500);
        return;
      } else if (response.data.error === '02') {
        setLoading(false);
        setAlertStatus('error');
        setText('A senha não estão iguais.');
        setPassword('');
        return setConfirmPassword('');
      }

      setAlertStatus('success');
      setText('Senha alterada com sucesso.');

      setTimeout(() => {
        setAlertStatus('info');
        setText('Redirecionando para a página de entrada.');
      }, 3000);

      return setTimeout(() => {
        setLoading(false);
        props.history.push('/entrar');
      }, 4500);
    } catch (e) {
      setLoading(false);
      setAlertStatus('error');
      setText('Ocorreu um error no sistema...');
      return;
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <Painel>
          <Logo src={logo} alt="logo vintage" />
          <Title>Sua nova senha</Title>

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
          ) : alertStatus === 'success' ? (
            <Alert
              status="success"
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
              width: '100%',
              display: loading ? 'none' : 'flex',
              flexDirection: 'column',
            }}
          >
            <FormControl id="password">
              <FormLabel>Nova Senha</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isRequired
              />
              <FormHelperText>Digite a nova senha.</FormHelperText>
            </FormControl>

            <FormControl id="confirmPassword">
              <FormLabel>Confirmar a nova senha</FormLabel>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                isRequired
              />
              <FormHelperText>Confirmer a nova senha.</FormHelperText>
            </FormControl>
            <Infos>
              <Button
                leftIcon={<FaKey />}
                size="md"
                type="submit"
                colorScheme="#0A0B16"
              >
                Mudar Senha
              </Button>
            </Infos>
          </form>
        </Painel>
      </Container>
      <Footer />
    </>
  );
}

export default ChangePassword;
