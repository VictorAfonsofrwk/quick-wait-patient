import { useState, useEffect } from 'react';
import { getNews } from "../../services/news/newsService";
import MainContentNews from '../../components/news/MainContentNews';
import CaroucelNews from '../../components/news/CaroucelNews';
import ListViewNews from '../../components/news/ListViewNews';
import { Container } from './styles';

export default function News() {
  const [articles, setArticles] = useState([]);
  async function loadNews() {
    setArticles(await getNews(''));
  }

  useEffect(() => {
    loadNews();
  }, []);
  return (
    <Container>
      <MainContentNews>
        <>
          <CaroucelNews articles={articles} />
          <ListViewNews articles={articles} />
        </>
      </MainContentNews>
    </Container>
  );
}
