import { useState, useEffect } from "react";
import { getNews } from "../../services/news/newsService";
import CaroucelNews from "../../components/news/CaroucelNews";
import ListViewNews from "../../components/news/ListViewNews";
import { Container, MainContentNews } from "./styles";
import * as Sentry from "@sentry/react";
import Loading from "../../components/loading";

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadNews() {
    setLoading(true);
    setArticles(await getNews(""));
    setLoading(false);
  }

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <Container loading={loading}>
      {
        !loading ? (
          <MainContentNews>
            <CaroucelNews articles={articles} />
            <ListViewNews articles={articles} />
          </MainContentNews>
        ) : <Loading />
      }
    </Container>
  );
}

export default Sentry.withProfiler(News);
