import React, { useEffect, useState } from 'react';
import {
  Container,
  Left,
  Right,
  Person,
  PersonName,
  PersonImg,
  PersonStatus,
  PersonInfo,
  PersonInfoName,
  MoneyBank,
  MoneyStatus,
  MoneyWallet,
  MoneyTitle,
  MoneyCoins,
  ReadySyncUpdateData,
} from './styled';
import {
  Progress,
  Spinner,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import {
  FaCircle,
  FaHeart,
  FaShieldAlt,
  FaUtensils,
  FaMugHot,
  FaBed,
  FaMale,
  FaFemale,
  FaWallet,
  FaCreditCard,
  FaCoins,
} from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import api from '../../api';
import { getToken } from '../../auth';
import ButtonCreatePerson from '../../components/ModalCreatePerson';

function UCP(props: any) {
  const [person, setPerson] = useState({
    heart: 0,
    armor: 0,
    sleep: 0,
    thirst: 0,
    hunger: 0,
    pv: 0,
    money: 0,
    moneybank: 0,
    sex: 0,
    login: 0,
    name: '',
    surname: '',
  });

  function ReturnDataInterval() {
    setInterval(async () => {
      const response = await api.get('/vintageroleplay/1', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          username: `${localStorage.getItem('username-vintage-studio')}`,
        },
      });

      setPerson(response.data);

      return;
    }, 120000);
  }

  useEffect(() => {
    if (!localStorage.getItem('login-vintage-studio')) {
      return props.history.push('/');
    }
    async function getInfoPerson() {
      try {
        const response = await api.get('/vintageroleplay/1', {
          headers: {
            Authorization: `Bearer ${getToken()}`,
            username: `${localStorage.getItem('username-vintage-studio')}`,
          },
        });

        setPerson(response.data);

        return;
      } catch (e) {}
    }
    ReturnDataInterval();
    getInfoPerson();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Left>
          <Person>
            {person.sex ? (
              <PersonImg
                src="https://www.flaticon.com/svg/static/icons/svg/2922/2922554.svg"
                alt="person img pattern"
              />
            ) : (
              <PersonImg
                src="https://www.flaticon.com/svg/static/icons/svg/2922/2922506.svg"
                alt="person img pattern"
              />
            )}

            <PersonName>
              {person.name} {person.surname}
            </PersonName>
            {person.login ? (
              <>
                <PersonStatus color="green">
                  <FaCircle size={12} />
                  &nbsp;Online
                </PersonStatus>
              </>
            ) : (
              <>
                <PersonStatus color="red">
                  <FaCircle size={12} />
                  &nbsp;Offline
                </PersonStatus>
              </>
            )}
            <PersonInfoName
              style={{ fontSize: '12pt', justifyContent: 'center' }}
            >
              {person.sex ? (
                <>
                  <FaFemale color="pink" />
                  &nbsp;Mulher
                </>
              ) : (
                <>
                  <FaMale color="cyan" />
                  &nbsp;Homem
                </>
              )}
            </PersonInfoName>
            <PersonInfo>
              <PersonInfoName>
                <FaHeart /> &nbsp;Vida
              </PersonInfoName>
              <Progress hasStripe value={person.heart} colorScheme="red" />
            </PersonInfo>
            <PersonInfo>
              <PersonInfoName>
                <FaShieldAlt /> &nbsp;Colete
              </PersonInfoName>
              <Progress hasStripe value={person.armor} colorScheme="gray" />
            </PersonInfo>
            <PersonInfo>
              <PersonInfoName>
                <FaUtensils /> &nbsp;Fome
              </PersonInfoName>
              <Progress hasStripe value={person.hunger} colorScheme="orange" />
            </PersonInfo>
            <PersonInfo>
              <PersonInfoName>
                <FaMugHot /> &nbsp;Sede
              </PersonInfoName>
              <Progress hasStripe value={person.thirst} colorScheme="blue" />
            </PersonInfo>
            <PersonInfo>
              <PersonInfoName>
                <FaBed /> &nbsp;Sono
              </PersonInfoName>
              <Progress hasStripe value={person.sleep} colorScheme="purple" />
            </PersonInfo>
            <MoneyTitle>Informações sobre seu dinheiro</MoneyTitle>
            <MoneyStatus>
              <MoneyWallet>
                <FaWallet color="teal" />
                &nbsp;R$ {person.money}
              </MoneyWallet>
              <MoneyBank>
                <FaCreditCard color="purple" />
                &nbsp; R$ {person.moneybank}
              </MoneyBank>
            </MoneyStatus>
            <MoneyCoins>
              <FaCoins color="yellow" />
              &nbsp; R$ {person.pv}
            </MoneyCoins>

            <ReadySyncUpdateData>
              <Spinner indeterminate={true} />
              &nbsp; Sincronização a cada 120 segundos.
            </ReadySyncUpdateData>
          </Person>
        </Left>
        <Right>
          {`${localStorage.getItem('nameperson-vintage-studio')}` === null ? (
            <ButtonCreatePerson />
          ) : (
            ''
          )}
          <Tabs variant="enclosed" size="lg" isFitted>
            <TabList>
              <Tab color="teal">Mudar Senha</Tab>
              <Tab color="teal">Loja</Tab>
              <Tab color="teal">Exclusão de Conta</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Right>
      </Container>
    </>
  );
}

export default UCP;
