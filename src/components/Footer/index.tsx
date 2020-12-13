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
        <Menu>
          <Option>
            <FaDiscord /> &nbsp;
            <LinkRedirect href="https://discord.gg/KaJVyTpBrR" target="_blank">
              Discord
            </LinkRedirect>
          </Option>
          <Option>
            <FaInstagram />
            &nbsp;
            <LinkRedirect
              href="https://instagram.com/vintagestudio"
              target="_blank"
            >
              Instagram
            </LinkRedirect>
          </Option>
          <Option>
            <FaComment /> &nbsp;
            <LinkR to="/forum">Fórum</LinkR>
          </Option>
          <Option>
            <FaSync />
            &nbsp;
            <LinkRedirect href="https://status.com/status" target="_blank">
              Status
            </LinkRedirect>
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
