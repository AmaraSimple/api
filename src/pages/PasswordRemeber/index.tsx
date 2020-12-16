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

function PasswordRemeber(props: any) {
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [alertStatus, setAlertStatus] = useState('');
  const [text, setText] = useState(
    'Insirar o e-mail que você utilizou para cadastrar.'
  );

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setAlertStatus('info');
    setText('Comunicando com a base de dados...');

    try {
      const response = await api.post('/sendchangepassword', { email });

      if (response.data.error === '03') {
        setLoading(false);
        setAlertStatus('error');
        setText('Não existe usuário cadastrado com esse email...');
        setEmail('');

        return;
      }
      setAlertStatus('success');
      setText('E-mail foi enviado com sucesso.');

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
          <Title>Recuperar Senha</Title>

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
              <FormLabel>E-mail</FormLabel>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isRequired
              />
              <FormHelperText>
                Digite seu e-mail para recuperar sua senha.
              </FormHelperText>
            </FormControl>

            <Infos>
              <LinkR style={{ marginRight: '30px' }} to="/entrar">
                Faça login
              </LinkR>

              <Button leftIcon={<FaKey />} size="md" type="submit">
                Recuperar
              </Button>
            </Infos>
          </form>
        </Painel>
      </Container>
      <Footer />
    </>
  );
}

export default PasswordRemeber;
