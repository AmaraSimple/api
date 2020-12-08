import React from 'react';
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Image,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa/index';
import logo from '../../assets/img/logo.png';
import { FaEnvira, FaDiscord, FaHome, FaComment } from 'react-icons/fa';

import { Container, SideLink, SideLinkRedirect, SideItem } from './styled';

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      <Button onClick={onOpen} leftIcon={<FaBars />}>
        Menu
      </Button>
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        isFullHeight={true}
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
              <Image src={logo} alt="logo vintage" width="120px" />
            </DrawerHeader>
            <DrawerBody>
              <SideItem>
                <FaHome /> &nbsp;
                <SideLink to="/">Home</SideLink>
              </SideItem>

              <SideItem>
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

              <SideItem>
                <FaEnvira />
                &nbsp;
                <SideLink to="/plataforma">Plataforma</SideLink>
              </SideItem>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Container>
  );
}

export default Sidebar;
