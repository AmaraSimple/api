import React, { useState } from 'react';
import { Container, Title } from './styled';
import {
  FormControl,
  FormHelperText,
  Input,
  FormLabel,
  Stack,
  Button,
  Alert,
  AlertIcon,
  propNames,
} from '@chakra-ui/react';
import { Loading } from '../../Animation';
import api from '../../../api';
import { getToken, logout } from '../../../auth';

function PersonChangePassword(props: any) {
  const [passwordActual, setPasswordActual] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [text, setText] = useState('Preenchar corretamente os campos abaixo.');
  const [alertStatus, setAlertStatus] = useState('info');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (password === passwordConfirm) {
      setLoading(true);
      try {
        const response = await api.post(
          `/vintageroleplay/changepassword/${localStorage.getItem(
            'idperson-vintage-studio'
          )}`,
          { passwordActual, password },
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
              username: localStorage.getItem('username-vintage-studio'),
            },
          }
        );

        if (response.data.error === '03') {
          setAlertStatus('error');
          setText('Usuário inserido não existe na nossa base de dados.');

          setPasswordActual('');
          setPassword('');
          setPasswordConfirm('');

          setTimeout(() => {
            setText('Redirecionando a tela de entrada.');
            setAlertStatus('info');
          }, 4500);
          logout();
          setLoading(false);

          return props.history.push('/dashboard');
        } else if (response.data.error === '14') {
          localStorage.removeItem('nameperson-vintage-studio');
          localStorage.removeItem('surnameperson-vintage-studio');
          localStorage.removeItem('login-vintage-studio');
          localStorage.removeItem('idperson-vintage-studio');

          setPasswordActual('');
          setPassword('');
          setPasswordConfirm('');

          setAlertStatus('error');
          setText('Personagem não existe.');

          setTimeout(() => {
            setText('Redirecionando a tela para criar seu personagem.');
            setAlertStatus('info');
          }, 4500);

          setLoading(false);
          return props.history.push('/dashboard');
        } else if (response.data === true) {
          setPasswordActual('');
          setPassword('');
          setPasswordConfirm('');
          setText('Sua senha foi alterada com sucesso!');
          setAlertStatus('success');
          setLoading(false);

          return;
        } else if (response.data === false) {
          setPasswordActual('');
          setPassword('');
          setPasswordConfirm('');
          setText('Você errou sua senha atual, digite novamente!');
          setAlertStatus('warning');
          setLoading(false);

          return;
        }
      } catch (e) {
        setText('Erro ao comunicar com o servidor!');
        setAlertStatus('error');
        setLoading(false);

        return;
      }
    }
    setPasswordActual('');
    setPassword('');
    setPasswordConfirm('');
    setText('a senha não estão iguais, digite novamente!');
    setAlertStatus('warning');
    setLoading(false);
    return;
  }

  return (
    <>
      <Container>
        <Title>Modificar a senha do Personagem</Title>

        {alertStatus === 'warning' ? (
          <Alert
            status="warning"
            style={{ marginBottom: '15px', color: 'gray' }}
          >
            <AlertIcon />
            {text}
          </Alert>
        ) : alertStatus === 'error' ? (
          <Alert status="error" style={{ marginBottom: '15px', color: 'gray' }}>
            <AlertIcon />
            {text}
          </Alert>
        ) : (
          <Alert status="info" style={{ marginBottom: '15px', color: 'gray' }}>
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
          <FormControl style={{ marginTop: '15px' }}>
            <FormLabel>Senha Atual</FormLabel>
            <Input
              type="password"
              value={passwordActual}
              onChange={(e) => setPasswordActual(e.target.value)}
            />
            <FormHelperText>Insirar sua senha atual</FormHelperText>
          </FormControl>
          <FormControl style={{ marginTop: '15px' }}>
            <FormLabel>Nova Senha</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText>Insirar sua nova senha</FormHelperText>
          </FormControl>
          <FormControl style={{ marginTop: '15px' }}>
            <FormLabel>Confirmar a nova senha</FormLabel>
            <Input
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <FormHelperText>Confirme sua nova senha</FormHelperText>
          </FormControl>

          <Stack mt={12}>
            <Button colorScheme="teal" type="submit">
              Atualizar Senha
            </Button>
          </Stack>
        </form>
      </Container>
    </>
  );
}

export default PersonChangePassword;
