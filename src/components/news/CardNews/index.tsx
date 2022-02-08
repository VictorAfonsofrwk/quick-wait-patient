import React from 'react';
import { IArticles } from "../../../interfaces/newsInterface";
import next from '../../../assets/next.svg';
import {
  Container,
  ImageNews,
  InformationsDivNews,
  TextNews,
  TextDateNews,
  LinkNewsDiv,
  LinkNews,
  NextIcon
} from './styles';

interface IArticle {
  article: IArticles;
  index: number;
}

const CardNews = ({ article, index }: IArticle) => {
  const { urlToImage, title, publishedAt, url } = article;
  const publishDate = `${new Date(publishedAt).getDate()} de 
    ${new Date(publishedAt).toLocaleString('pt-BR', {
    month: 'long'
  })}`;

  return (
    <Container key={index}>
      <ImageNews style={{ backgroundImage: `url(${urlToImage})` }} />
      <InformationsDivNews>
        <TextNews className="line">{title}</TextNews>
        <TextDateNews>{publishDate}</TextDateNews>
        <LinkNewsDiv>
          <LinkNews href={url} target="_blank">Ir para a notícia</LinkNews>
          <NextIcon src={next} />
        </LinkNewsDiv>
      </InformationsDivNews>
    </Container>
  );
}

export default CardNews;