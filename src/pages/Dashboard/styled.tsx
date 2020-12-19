import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  padding: 120px;
  display: flex;
  flex-direction: column;

  @media (max-width: 620px) {
    align-items: center;
    margin-top: 15px;
  }
`;

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 60px;

  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  color: #fff;
  background: #2ecc71;
  border: #181a2e solid 1px;

  &:hover {
    background: #28b463;
  }
`;

const ContainerDirect = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-left: 15px;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export { Container, ButtonStyled, ContainerDirect, Right, Left };
