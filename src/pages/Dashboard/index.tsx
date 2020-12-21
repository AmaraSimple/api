import React, { useState, useEffect } from 'react';
import {
  Container,
  ButtonStyled,
  Left,
  Right,
  ContainerDirect,
  LeftContent,
  RightContent,
  New,
  NewTitle,
  NewHeader,
  NewImg,
  NewMsg,
  NewNameUser,
  NewImgUser,
  Copyright,
  UserPersonStatus,
  UserImg,
  UserInfo,
  UserInfos,
  UserPersonName,
  UserPersonInfo,
  UserName,
  UserNames,
  UserUsername,
} from './styled';
import {
  MCloseButton,
  MHeader,
  MContent,
  MOverlay,
  MFooter,
  MBody,
  MContainer,
  MButton,
} from '../../components/Modal';
import { FaPlusSquare, FaCircle } from 'react-icons/fa';
import {
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormHelperText,
  useToast,
} from '@chakra-ui/react';

import Navbar from '../../components/Navbar';
import { getToken, logout } from '../../auth';
import api from '../../api';
import { Loading } from '../../components/Animation';

function Dashboard(props: any) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToast();
  const [registerOpen, setRegisterOpen] = useState(false);

  const [servidor, setServidor] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [serial, setSerial] = useState('');
  const [discordid, setDiscordid] = useState('');
  const [sex, setSex] = useState('');

  const [loading, setLoading] = useState(false);

  const [namePerson, setNamePerson] = useState('');
  const [surnamePerson, setSurnamePerson] = useState('');
  const [loginPerson, setLoginPerson] = useState(false);

  const username = localStorage.getItem('username-vintage-studio') || null;

  useEffect(() => {
    async function infoPerson() {
      try {
        const response = await api.get(`/vintageroleplay/${username}`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
            username: username,
          },
        });

        setSurnamePerson('');
        setLoginPerson(false);
        setNamePerson('');

        if (response.data.error === '3') return;
        else if (response.data.error === '14') return;
        else if (response.data.error === '15') return;

        setSurnamePerson(response.data.surname);
        setLoginPerson(response.data.login);
        return setNamePerson(response.data.name);
      } catch (e) {}
    }

    infoPerson();
  }, [loading]);

  const onOpenRegister = () => {
    if (registerOpen === false) {
      setRegisterOpen(true);
    }
  };
  const onCloseRegister = () => {
    if (registerOpen === true) {
      setRegisterOpen(false);
    }
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (username !== null && username.length !== 0) {
      if (
        name.length !== 0 &&
        surname.length !== 0 &&
        serial.length !== 0 &&
        discordid.length !== 0 &&
        sex.length !== 0
      ) {
        setLoading(true);
        try {
          const response = await api.post(
            '/vintageroleplay',
            { name, surname, password, serial, discordid, sex },
            {
              headers: {
                Authorization: `Bearer ${getToken()}`,
                username: username,
              },
            }
          );

          if (response.data.error === '03') {
            onCloseRegister;
            setLoading(false);
            setName('');
            setSurname('');
            setSerial('');
            setDiscordid('');
            setPassword('');
            setSex('');
            setRegisterOpen(false);

            toast({
              position: 'top-left',
              title: 'Usuário inválido.',
              description: `Usuário enviado, não está cadastrado. Refaça o login!`,
              status: 'warning',
              duration: 9000,
              isClosable: true,
            });

            logout();

            return props.history.push('/entrar');
          } else if (response.data.error === '13') {
            setLoading(false);
            setName('');
            setSurname('');
            setSerial('');
            setDiscordid('');
            setPassword('');
            setSex('');
            setRegisterOpen(false);

            return toast({
              position: 'top-left',
              title: 'Personagem já existente.',
              description: `Sua conta, já tem um personagem criado!`,
              status: 'warning',
              duration: 9000,
              isClosable: true,
            });
          }
          setLoading(false);
          setName('');
          setSurname('');
          setSerial('');
          setDiscordid('');
          setPassword('');
          setSex('');
          setRegisterOpen(false);

          return toast({
            position: 'top-left',
            title: 'Personagem criado.',
            description: `Seu personagem ${name} ${surname}, foi criado com sucesso.`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
        } catch (e) {
          setLoading(false);
          setPassword('');

          return toast({
            position: 'top-left',
            title: 'Erro ao se comunicar com o servidor.',
            description: `Entre em contato com administrador.`,
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        }
      } else {
        setPassword('');

        return toast({
          position: 'top-left',
          title: 'Campo vazio.',
          description: `Você precisa preencher todos os campos do formulario.`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <LeftContent>
          <NewTitle>Feed de Noticias</NewTitle>
          <New>
            <NewHeader>
              <NewImgUser
                src="https://www.flaticon.com/svg/static/icons/svg/3237/3237472.svg"
                alt="user img vintage"
              />
              <NewNameUser>Daniel Souza</NewNameUser>
            </NewHeader>
            <NewImg
              src="https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg"
              alt="img background new"
            />
            <NewMsg>
              Essa mensagem é teste, só para ver como vai ficar, a mensagem com
              a imagem a cima.
            </NewMsg>
          </New>
          <New>
            <NewHeader>
              <NewImgUser
                src="https://www.flaticon.com/svg/static/icons/svg/3237/3237472.svg"
                alt="user img vintage"
              />
              <NewNameUser>Daniel Souza</NewNameUser>
            </NewHeader>
            <NewImg
              src="https://static.wixstatic.com/media/71a6c2_bddf371813b546a7834c252183473600~mv2.png"
              alt="img background new"
            />
            <NewMsg>
              Essa mensagem é teste, só para ver como vai ficar, a mensagem com
              a imagem a cima.
            </NewMsg>
          </New>
        </LeftContent>
        <RightContent>
          <ButtonStyled onClick={onOpen}>
            <FaPlusSquare />
            &nbsp;Novo Personagem
          </ButtonStyled>

          <UserInfos>
            <UserInfo>
              <UserImg
                src={`${localStorage.getItem('photo-vintage-studio')}`}
                alt="vintage user img"
              />
              <UserNames>
                <UserName>
                  {localStorage.getItem('name-vintage-studio')}
                </UserName>
                <UserUsername>{username}</UserUsername>
              </UserNames>
            </UserInfo>
          </UserInfos>

          <UserPersonInfo>
            Meus Personagem
            {namePerson === '' ? (
              <UserPersonName>Nenhum personagem criado</UserPersonName>
            ) : (
              <>
                <UserPersonName>
                  {namePerson} {surnamePerson}
                </UserPersonName>
                {loginPerson ? (
                  <>
                    <UserPersonStatus color="green">
                      <FaCircle size={12} />
                      &nbsp;Online
                    </UserPersonStatus>
                  </>
                ) : (
                  <>
                    <UserPersonStatus color="red">
                      <FaCircle size={12} />
                      &nbsp;Offline
                    </UserPersonStatus>
                  </>
                )}
              </>
            )}
          </UserPersonInfo>

          <Copyright>
            &copy;{new Date().getFullYear()} Copyright Vintage Studio - Todos
            direitos reservados.
          </Copyright>
        </RightContent>
      </Container>

      <MContainer
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        isCentered
      >
        <MOverlay />
        <MContent>
          <MHeader>Escolhe o servidor</MHeader>
          <MCloseButton />
          <MBody pb={6}>
            <Select
              placeholder="Selecionar servidor"
              onChange={(e) => setServidor(e.target.value)}
            >
              <option value="vintageroleplay" style={{ color: 'black' }}>
                Vintage Roleplay
              </option>
            </Select>
          </MBody>

          <MFooter>
            <MButton
              colorScheme="green"
              mr={3}
              onClick={() => {
                onClose;
                onOpenRegister();
                if (isOpen === true && servidor === 'vintageroleplay') {
                  toast({
                    position: 'top-left',
                    title: 'Servidor selecionado.',
                    description: `Servidor selecionado com sucesso.`,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  });
                } else {
                  toast({
                    position: 'top-left',
                    title: 'Servidor não selecionado.',
                    description: `É necessário selecionar o servidor.`,
                    status: 'warning',
                    duration: 9000,
                    isClosable: true,
                  });
                }
              }}
            >
              Escolhe
            </MButton>
            <MButton onClick={onClose} colorScheme="red">
              Sair
            </MButton>
          </MFooter>
        </MContent>
      </MContainer>
      {servidor === 'vintageroleplay' ? (
        isOpen === true ? (
          <MContainer
            isOpen={registerOpen}
            onClose={onCloseRegister}
            closeOnEsc={false}
            closeOnOverlayClick={false}
            isCentered
            size="xl"
          >
            <MOverlay />
            <MContent>
              <MHeader>Criar novo personagem</MHeader>
              <MCloseButton />

              <MBody
                pb={6}
                style={{
                  display: loading ? 'flex' : 'none',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Loading status={loading} />
              </MBody>
              <form
                onSubmit={(e) => handleSubmit(e)}
                style={{
                  display: loading ? 'none' : 'flex',
                  flexDirection: 'column',
                }}
              >
                <MBody pb={6}>
                  <ContainerDirect>
                    <Left>
                      <FormControl id="name">
                        <FormLabel>Primeiro Nome</FormLabel>
                        <Input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          isRequired
                        />
                        <FormHelperText>
                          Primeiro nome do seu personagem.
                        </FormHelperText>
                      </FormControl>

                      <FormControl id="surname" style={{ marginTop: '7px' }}>
                        <FormLabel>Sobrenome</FormLabel>
                        <Input
                          type="text"
                          value={surname}
                          onChange={(e) => setSurname(e.target.value)}
                          isRequired
                        />
                        <FormHelperText>
                          Sobrenome do seu personagem
                        </FormHelperText>
                      </FormControl>

                      <FormControl id="password" style={{ marginTop: '7px' }}>
                        <FormLabel>Senha</FormLabel>
                        <Input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          isRequired
                        />
                        <FormHelperText>
                          Sua senha do seu Personagem
                        </FormHelperText>
                      </FormControl>
                    </Left>

                    <Right>
                      <FormControl id="serial">
                        <FormLabel>Serial</FormLabel>
                        <Input
                          type="text"
                          value={serial}
                          onChange={(e) => setSerial(e.target.value)}
                          isRequired
                        />
                        <FormHelperText>
                          Insirar seu serial do MTA
                        </FormHelperText>
                      </FormControl>

                      <FormControl id="discordid" style={{ marginTop: '7px' }}>
                        <FormLabel>Discord ID</FormLabel>
                        <Input
                          type="text"
                          value={discordid}
                          onChange={(e) => setDiscordid(e.target.value)}
                          isRequired
                        />
                        <FormHelperText>
                          Insirar seu ID do Discord
                        </FormHelperText>
                      </FormControl>

                      <FormControl id="sexo" style={{ marginTop: '7px' }}>
                        <FormLabel>Sexo</FormLabel>
                        <Select
                          placeholder="Selecione o sexo"
                          value={sex}
                          onChange={(e) => setSex(e.target.value)}
                        >
                          <option value="mulher" style={{ color: 'black' }}>
                            Mulher
                          </option>
                          <option value="homem" style={{ color: 'black' }}>
                            Homem
                          </option>
                        </Select>
                        <FormHelperText>
                          Selecione o sexo do seu personagem
                        </FormHelperText>
                      </FormControl>
                    </Right>
                  </ContainerDirect>
                </MBody>

                <MFooter>
                  <MButton colorScheme="green" mr={3} type="submit">
                    Criar Personagem
                  </MButton>
                  <MButton onClick={onCloseRegister} colorScheme="red">
                    Cancelar
                  </MButton>
                </MFooter>
              </form>
            </MContent>
          </MContainer>
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </>
  );
}

export default Dashboard;
