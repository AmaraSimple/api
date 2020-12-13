import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 620px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Left = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 620px) {
  }
`;

const Right = styled.div`
  width: 100%;
  margin-right: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 620px) {
    margin-right: 0;
    padding: 25px;
  }
`;

const Title = styled.span`
  font-family: 'Sansita Swashed', cursive;

  font-size: 49pt;

  @media (max-width: 620px) {
    font-size: 35pt;
  }
`;

const SubTitle = styled.span`
  margin-top: 35px;
`;

const Text = styled.span`
  text-align: center;

  font-weight: 500;
  font-size: 14pt;
`;

const Img = styled.img`
  width: 320px;

  border-radius: 160px;
  border: 3px solid white;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  @media (max-width: 620px) {
    width: 140px;
    border-radius: 70px;
  }
`;

export { Container, Left, Right, Title, SubTitle, Img, Text };
