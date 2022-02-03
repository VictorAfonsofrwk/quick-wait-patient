import React, { useState } from 'react';
import { IArticles } from "../../../interfaces/newsInterface";
import next from '../../../assets/next.svg';
import { ModalNews } from '../ModalNews';
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
  const [isOpen, setIsOpen] = useState(false);
  const publishDate = `${new Date(publishedAt).getDate()} de 
    ${new Date(publishedAt).toLocaleString('pt-BR', {
    month: 'long'
  })}`;

  const handleShowModal = () => {
    setIsOpen(!isOpen)
  };

  return (
    <Container key={index} onClick={handleShowModal}>
      <ImageNews style={{ backgroundImage: `url(${urlToImage})` }} />
      <InformationsDivNews>
        <TextNews>{title}</TextNews>
        <TextDateNews>{publishDate}</TextDateNews>
        <LinkNewsDiv>
          <LinkNews href={url} target="_blank">Ir para a notícia</LinkNews>
          <NextIcon src={next} />
        </LinkNewsDiv>
      </InformationsDivNews>
      {
        isOpen &&
        <ModalNews
          showModal={handleShowModal}
          isOpen={isOpen}
          article={article}
        />
      }
    </Container>
  );
}

export default CardNews;