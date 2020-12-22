import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 80px;
  padding: 30px;

  @media (max-width: 620px) {
    padding: 15px;
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 40%;

  @media (max-width: 620px) {
    width: 100%;
  }
`;

const Person = styled.div`
  width: 420px;
  height: 100vh;
  padding: 30px;
  border-radius: 4px;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  background: #0c0e1b !important;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 620px) {
    width: 385px;
  }
`;

const PersonImg = styled.img`
  width: 80px;
  margin-bottom: 12px;

  border-radius: 40px;
  background: white !important;
`;

const PersonName = styled.span`
  font-size: 14pt;
  font-weight: 700;
`;

const PersonStatus = styled.div`
  color: ${(props) => props.color};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PersonInfo = styled.div`
  width: 100%;
  margin-top: 15px;
`;

const PersonInfoName = styled.div`
  font-size: 13pt;
  font-weight: 600;

  display: flex;
  align-items: center;
`;

const MoneyStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 15.5pt;

  @media (max-width: 620px) {
    font-size: 14pt;
  }
`;

const MoneyTitle = styled.span`
  margin-top: 30px;

  @media (max-width: 620px) {
    margin-top: 12px;
  }
`;

const MoneyWallet = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-right: 15px;
`;

const MoneyBank = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoneyCoins = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 15px;

  font-size: 18pt;

  @media (max-width: 620px) {
    font-size: 14.5pt;
    margin-top: 2px;
  }
`;

const ReadySyncUpdateData = styled.div`
  margin-top: 35px;
  font-size: 13.5pt;

  color: teal;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 620px) {
    margin-top: 5px;
    font-size: 11pt;
  }
`;

const Right = styled.div`
  width: 100%;
  height: 100vh;

  padding: 25px;
  border-radius: 4px;
  margin-left: 15px;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  background: #0c0e1b !important;

  @media (max-width: 620px) {
    margin-left: 0;
    margin-top: 30px;
  }
`;

export {
  Container,
  Left,
  Right,
  Person,
  PersonName,
  PersonImg,
  PersonStatus,
  PersonInfo,
  PersonInfoName,
  MoneyStatus,
  MoneyTitle,
  MoneyBank,
  MoneyWallet,
  MoneyCoins,
  ReadySyncUpdateData,
};
