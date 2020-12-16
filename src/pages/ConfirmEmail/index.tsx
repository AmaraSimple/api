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

function ConfirmEmail(props: any) {
  const [username, setUsername] = useState('');

  const [loading, setLoading] = useState(false);
  const [alertStatus, setAlertStatus] = useState('');
  const [text, setText] = useState(
    'Insirar o username que você utilizou para cadastrar.'
  );
  const [sendEmail, setSendEmail] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setAlertStatus('info');
    setText('Comunicando com a base de dados...');

    try {
      const response = await api.post(`/confirm/${props.match.params.token}`, {
        username,
      });

      if (response.data.error === '03') {
        setLoading(false);
        setAlertStatus('error');
        setText('Não existe usuário cadastrado com esse username...');
        setUsername('');

        return;
      } else if (response.data.error === '09') {
        setAlertStatus('error');
        setText('Token inválido');
        setSendEmail(true);
        setLoading(false);
        return;
      }
      setAlertStatus('success');
      setText('E-mail confirmado com sucesso.');

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
      <Navbar />
      <Container>
        <Painel>
          <Logo src={logo} alt="logo vintage" />
          <Title>Confirme seu E-mail</Title>

          {alertStatus === 'warning' ? (
            <Alert status="warning" style={{ marginBottom: '15px' }}>
              <AlertIcon />
              {text}
            </Alert>
          ) : alertStatus === 'error' ? (
            <Alert status="error" style={{ marginBottom: '15px' }}>
              <AlertIcon />
              {text}&nbsp;
              {sendEmail ? (
                <Button size="sm" onClick={() => handleSenEmail()}>
                  Reenviar E-mail?
                </Button>
              ) : (
                ''
              )}
            </Alert>
          ) : alertStatus === 'success' ? (
            <Alert status="success" style={{ marginBottom: '15px' }}>
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
                isRequired
              />
              <FormHelperText>
                Digite seu username para confirmar seu e-mail.
              </FormHelperText>
            </FormControl>

            <Infos>
              <Button leftIcon={<FaKey />} size="md" type="submit">
                Ativar E-mail
              </Button>
            </Infos>
          </form>
        </Painel>
      </Container>
      <Footer />
    </>
  );
}

export default ConfirmEmail;
