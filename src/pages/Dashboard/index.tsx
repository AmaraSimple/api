import React, { useEffect, useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { Button, useDisclosure } from '@chakra-ui/react';

import {
  Container,
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
  IrUCP,
} from './styled';
import Navbar from '../../components/Navbar';
import ButtonCreatePerson from '../../components/ModalCreatePerson';
import { getToken } from '../../auth';
import api from '../../api';

import logo from '../../assets/img/fav.png';

function Dashboard(props: any) {
  const [userExist, setUserExist] = useState(false);
  const [update, setUpdate] = useState(false);
  const [authorization, setAuthorization] = useState(false);

  function updateInfo() {
    if (authorization) {
      setUpdate(!update);
      setAuthorization(false);
      return;
    }
  }

  useEffect(() => {
    async function loadPerson() {
      const response = await api.get('/vintageroleplay/1', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          username: `${localStorage.getItem('username-vintage-studio')}`,
        },
      });

      if (response.data.error === '3') return setUserExist(false);
      else if (response.data.error === '14') {
        localStorage.removeItem('nameperson-vintage-studio');
        localStorage.removeItem('surnameperson-vintage-studio');
        localStorage.removeItem('login-vintage-studio');
        localStorage.removeItem('idperson-vintage-studio');

        setUserExist(false);
        return;
      } else if (response.data.error === '15') return;

      localStorage.setItem('nameperson-vintage-studio', response.data.name);
      localStorage.setItem(
        'surnameperson-vintage-studio',
        response.data.surname
      );
      localStorage.setItem('login-vintage-studio', response.data.login);
      setUserExist(true);

      return;
    }

    setInterval(() => {
      setAuthorization(true);
    }, 10000);

    loadPerson();
  }, [update]);

  return (
    <>
      <Navbar />
      <Container>
        <LeftContent>
          <NewTitle>Feed de Noticias</NewTitle>
          {false ? (
            <>
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
                  Essa mensagem é teste, só para ver como vai ficar, a mensagem
                  com a imagem a cima.
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
                  Essa mensagem é teste, só para ver como vai ficar, a mensagem
                  com a imagem a cima.
                </NewMsg>
              </New>
            </>
          ) : (
            <New>
              <NewHeader>
                <NewImgUser
                  src={logo}
                  alt="user img vintage"
                  style={{ borderRadius: '20px' }}
                />
                <NewNameUser>Projeto Vintage Studio</NewNameUser>
              </NewHeader>
              <NewImg
                src="https://libertycity.net/uploads/download/gtasa_objects/fulls/sgiuukfldcev03qkergbp87fk4/15815202943815_gallery12.jpg"
                alt="img background new"
              />
              <NewMsg>
                Novidades serão apresentadas no Feed e no nosso Discord.
              </NewMsg>
            </New>
          )}
        </LeftContent>
        <RightContent>
          {userExist ? '' : <ButtonCreatePerson />}

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
                <UserUsername>
                  {localStorage.getItem('username-vintage-studio')}
                </UserUsername>
              </UserNames>
            </UserInfo>
          </UserInfos>

          <UserPersonInfo>
            Meus Personagem
            {userExist ? (
              <>
                <UserPersonName>
                  {`${localStorage.getItem('nameperson-vintage-studio')}`}{' '}
                  {`${localStorage.getItem('surnameperson-vintage-studio')}`}
                </UserPersonName>
                {localStorage.getItem('login-vintage-studio') === '1' ? (
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
                <IrUCP to="/ucp">Ver personagem</IrUCP>
              </>
            ) : (
              <>
                <UserPersonName>Nenhum personagem criado</UserPersonName>
                <Button
                  mt={1}
                  onClick={() => updateInfo()}
                  colorScheme="blue"
                  size="sm"
                >
                  Atualizar
                </Button>
              </>
            )}
          </UserPersonInfo>

          <Copyright>
            &copy;{new Date().getFullYear()} Copyright Vintage Studio - Todos
            direitos reservados.
          </Copyright>
        </RightContent>
      </Container>
    </>
  );
}

export default Dashboard;
