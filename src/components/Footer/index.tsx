import React from 'react';
import {
  Container,
  Option,
  LinkR,
  Copyright,
  Menu,
  LinkRedirect,
} from './styled';

import { FaDiscord, FaInstagram, FaComment, FaSync } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <Container>
        <Copyright>
          &copy;{new Date().getFullYear()} Copyright Vintage Studio - Todos
          Diretos Reservados.
        </Copyright>
      </Container>
    </>
  );
}

export default Footer;
