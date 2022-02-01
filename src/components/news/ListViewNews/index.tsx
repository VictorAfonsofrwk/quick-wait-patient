import React from 'react';
import CardNews from '../CardNews';
import { Container } from './styles';
import { IArticles } from "../../../interfaces/newsInterface";

interface IListArticles {
  articles: IArticles[];
}

const ListViewNews = ({ articles }: IListArticles) => {
  console.log(articles)
  return (
    <Container>
      {articles.map(news => (
        <CardNews />
      ))}      
    </Container>
  );
}

export default ListViewNews;