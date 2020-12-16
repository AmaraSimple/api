import React from 'react';
import { Container, LinkRedirect, LinkR, Item } from './styled';
import { FaArrowLeft } from 'react-icons/fa';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

function AuthNavbar() {
  return (
    <>
      <Container>
        <Item>
          <FaArrowLeft />

          <LinkR to="/">&nbsp;Retorna</LinkR>
        </Item>
      </Container>
    </>
  );
}

export default AuthNavbar;
