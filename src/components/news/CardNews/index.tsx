import React from 'react';

import { 
  Container,
  ImageNews,
  InformationsDivNews,
  TextNews,
  TextDateNews
 } from './styles';

const CardNews: React.FC = () => {
  return (
    <Container>
      <ImageNews />
      <InformationsDivNews>
        <TextNews>Testando</TextNews>
        <TextDateNews>Testando123</TextDateNews>
      </InformationsDivNews>
    </Container>
  );
}

export default CardNews;