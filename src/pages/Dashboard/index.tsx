import React from 'react';
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
} from './styled';

import { FaPlusSquare, FaCircle } from 'react-icons/fa';

import Navbar from '../../components/Navbar';
import ButtonCreatePerson from '../../components/ModalCreatePerson';

function Dashboard(props: any) {
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
          {`${localStorage.getItem('nameperson-vintage-studio')}` ? (
            ''
          ) : (
            <ButtonCreatePerson>
              <FaPlusSquare />
              &nbsp;Novo Personagem
            </ButtonCreatePerson>
          )}

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
            {`${localStorage.getItem('nameperson-vintage-studio')}` === '' ? (
              <UserPersonName>Nenhum personagem criado</UserPersonName>
            ) : (
              <>
                <UserPersonName>
                  {`${localStorage.getItem('nameperson-vintage-studio')}`}{' '}
                  {`${localStorage.getItem('surnameperson-vintage-studio')}`}
                </UserPersonName>
                {`${localStorage.getItem('login-vintage-studio')}` === '1' ? (
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
    </>
  );
}

export default Dashboard;
