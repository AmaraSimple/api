import React, { useState, useEffect } from 'react';
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Image,
  Divider,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa/index';
import logo from '../../assets/img/fav.png';
import {
  FaUserAstronaut,
  FaSignOutAlt,
  FaDiscord,
  FaHome,
  FaComment,
  FaSignInAlt,
} from 'react-icons/fa';
import { isAuthenticated, logout } from '../../auth';

import {
  Container,
  SideLink,
  SideLinkRedirect,
  SideItem,
  ImgPerfil,
} from './styled';

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    function authVerify() {
      if (isAuthenticated()) {
        return setAuth(true);
      } else if (isAuthenticated() === null) {
        return setAuth(false);
      } else {
        return setAuth(false);
      }
    }
    authVerify();
  }, [auth]);

  return (
    <Container>
      <Button onClick={onOpen} leftIcon={<FaBars />} colorScheme="#0A0B16">
        Menu
      </Button>
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        isFullHeight={true}
        colorScheme="#0A0B16"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={logo}
                alt="logo vintage"
                width="60px"
                style={{ borderRadius: '30px', border: '3px solid #fff' }}
              />
              &nbsp;VintAGe Studio
            </DrawerHeader>
            <DrawerBody>
              <SideItem visible={auth === true ? false : true}>
                <FaHome /> &nbsp;
                <SideLink to="/dashboard">Dashboard</SideLink>
              </SideItem>

              <SideItem visible={auth === true ? false : true}>
                <FaUserAstronaut /> &nbsp;
                <SideLink to="/dashboard">UCP</SideLink>
              </SideItem>

              <SideItem visible={auth}>
                <FaHome /> &nbsp;
                <SideLink to="/">Home</SideLink>
              </SideItem>

              <SideItem visible={auth}>
                <FaComment />
                &nbsp;
                <SideLink to="/sobre">Sobre</SideLink>
              </SideItem>

              <SideItem>
                <FaDiscord />

                <SideLinkRedirect
                  href="https://discord.gg/KaJVyTpBrR"
                  target="_blank"
                >
                  &nbsp; Discord
                </SideLinkRedirect>
              </SideItem>

              <SideItem visible={auth}>
                <FaSignInAlt />
                &nbsp;
                <SideLink to="/entrar">Login</SideLink>
              </SideItem>

              <SideItem visible={auth === true ? false : true}>
                <FaSignOutAlt />
                &nbsp;
                <SideLink to="/entrar" onClick={() => logout()}>
                  Sair
                </SideLink>
              </SideItem>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Container>
  );
}

export default Sidebar;
