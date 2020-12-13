import React from 'react';
import { Container, Option, LinkR, Copyright, Menu } from './styled';

import { FaDiscord, FaInstagram, FaComment, FaSync } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <Container>
        <Menu>
          <Option>
            <FaDiscord /> &nbsp;
            <LinkR to="!#">Discord</LinkR>
          </Option>
          <Option>
            <FaInstagram />
            &nbsp;
            <LinkR to="!#">Instagram</LinkR>
          </Option>
          <Option>
            <FaComment /> &nbsp;
            <LinkR to="!#">Fórum</LinkR>
          </Option>
          <Option>
            <FaSync />
            &nbsp;
            <LinkR to="!#">Status</LinkR>
          </Option>
        </Menu>
        <Copyright>
          &copy;{new Date().getFullYear()} Copyright - Vintage Studio
        </Copyright>
      </Container>
    </>
  );
}

export default Footer;
