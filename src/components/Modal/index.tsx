import styled from 'styled-components';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

const MContainer = styled(Modal)`
  margin-top: 80px;
`;
const MBody = styled(ModalBody)`
  background: #06070e !important;
`;
const MFooter = styled(ModalFooter)`
  background: #06070e !important;
`;
const MOverlay = styled(ModalOverlay)``;
const MContent = styled(ModalContent)``;
const MHeader = styled(ModalHeader)`
  background: #06070e !important;
`;
const MCloseButton = styled(ModalCloseButton)``;
const MButton = styled(Button)``;

export {
  MContainer,
  MBody,
  MFooter,
  MOverlay,
  MContent,
  MHeader,
  MCloseButton,
  MButton,
};
