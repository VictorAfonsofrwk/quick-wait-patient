import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [timer, setTimer] = useState(1910);
  const [dateTime, setDateTime] = useState(new Date(0))
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current)
  }
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1)
    }, 1000)
    return () => clear();
  }, [])

  useEffect(() => {
    if (timer === 0) {
      clear()
    }

  }, [timer])
  function display(seconds: number) {
    const format = val => `0${Math.floor(val)}`.slice(-2)
    const hours = seconds / 3600
    const minutes = (seconds % 3600) / 60

    return [hours, minutes, seconds % 60].map(format).join(':')
  }
  return (
    <Container>
      <CheckInContainer>
        <CheckDiv>
          <CheckIcon src={CheckinIcon} className="center" />
          <CheckText>Tudo certo!</CheckText>
        </CheckDiv>
        <TimeCheckinDiv>
          <CheckText>O Checkin deve ser feito em:</CheckText>
          <TimeBox>
            <TimeText>{display(timer)}</TimeText>
          </TimeBox>
        </TimeCheckinDiv>
      </CheckInContainer>
      <FooterButtonDiv>
        <Link to='/patient'><CancelButton>Cancelar Ida</CancelButton></Link>
      </FooterButtonDiv>
    </Container>
  );
}

export default CheckIn