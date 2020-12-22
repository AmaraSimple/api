import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;

  display: flex;
  margin-top: 80px;

  @media (max-width: 620px) {
    align-items: center;
    margin-top: 50px;

    flex-direction: column;
  }
`;

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 140px;
  height: 45px;
  font-size: 11pt;
  padding: 5px;

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

const LeftContent = styled.div`
  width: 100%;
  padding: 30px 80px 30px 80px;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const UserInfos = styled.div`
  margin-top: 45px;
  margin-bottom: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserImg = styled.img`
  width: 50px;
  margin-right: 15px;
`;

const UserNames = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span``;

const UserUsername = styled.span`
  font-size: 13pt;
  font-weight: 700;
`;

const UserPersonInfo = styled.div`
  margin-top: 25px;
  font-size: 15pt;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserPersonName = styled.span`
  font-size: 12pt;
  font-weight: 100;
`;

const UserPersonStatus = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.color};
  font-size: 12pt;
  font-weight: 100;
`;

const Copyright = styled.div`
  margin-top: 40px;
  font-size: 11pt;

  color: #bdb9b9;
`;

const RightContent = styled.div`
  width: 40%;
  margin-top: 50px;
  position: fixed;
  right: 0;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 620px) {
    width: 100%;
    position: relative;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const New = styled.div`
  width: 63%;
  margin-bottom: 25px;

  background: #0c0e1b !important;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 620px) {
    width: 100%;
  }
`;

const NewTitle = styled.div`
  margin-bottom: 20px;

  font-size: 17pt;
  font-weight: 600;
  text-align: left;
`;

const NewHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 70px;
`;

const NewImgUser = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const NewNameUser = styled.span``;

const NewImg = styled.img``;

const NewMsg = styled.p`
  padding: 15px;
`;

const IrUCP = styled(Link)`
  font-size: 11pt;
  font-weight: 100;
  color: #c9c5c5;

  &:hover {
    color: #333;
  }
`;

export {
  Container,
  ButtonStyled,
  ContainerDirect,
  Right,
  Left,
  LeftContent,
  RightContent,
  New,
  NewTitle,
  NewHeader,
  NewImg,
  NewMsg,
  NewImgUser,
  NewNameUser,
  UserInfos,
  UserInfo,
  UserName,
  UserImg,
  UserPersonInfo,
  UserPersonName,
  UserPersonStatus,
  Copyright,
  UserUsername,
  UserNames,
  IrUCP,
};
