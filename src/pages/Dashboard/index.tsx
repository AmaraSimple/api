import React from 'react';
import { Container, Painel, Title, Ip } from './styled';
import { FaCheckCircle } from 'react-icons/fa';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Dashboard() {
  return (
    <>
      <Navbar />
      <Container>
        <Painel>
          <Title>
            Sua conta foi criada com Sucesso, entre no nosso servidor.
          </Title>
          <FaCheckCircle size={60} color="#2b961f" />
          <Ip>mtasa://192.168.1.1:27777</Ip>
        </Painel>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard;
