import React from 'react';
import CheckinIcon from '../../assets/check.svg';
import {
  Container,
  CheckInContainer,
  CheckDiv,
  TimeCheckinDiv,
  CheckIcon,
  CheckText,
  TimeBox,
  TimeText,
  FooterButtonDiv,
  CancelButton
} from './styles';

const CheckIn: React.FC = () => {
  return (
    <Container>
      <CheckInContainer>
        <CheckDiv>
          <CheckIcon src={CheckinIcon} className="center"/>
          <CheckText>Tudo certo!</CheckText>
        </CheckDiv>
        <TimeCheckinDiv>
          <CheckText>O Checkin deve ser feito em:</CheckText>
          <TimeBox>
            <TimeText>00:35:15</TimeText>
          </TimeBox>
        </TimeCheckinDiv>
      </CheckInContainer>
      <FooterButtonDiv>
        <CancelButton>Cancelar Ida</CancelButton>
      </FooterButtonDiv>
    </Container>
  );
}

export default CheckIn;