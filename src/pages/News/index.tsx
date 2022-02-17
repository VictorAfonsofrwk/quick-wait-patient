import { useState, useEffect } from "react";
import { getNews } from "../../services/news/newsService";
import MainContentNews from "../../components/news/MainContentNews";
import CaroucelNews from "../../components/news/CaroucelNews";
import ListViewNews from "../../components/news/ListViewNews";
import { Container } from "./styles";
import * as Sentry from "@sentry/react";
import Loading from "../../components/loading";

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  async function loadNews() {
    setArticles(await getNews(""));
    setLoading(false);
  }

  useEffect(() => {
    loadNews();
  }, []);
  let mainJsx = <Loading />;
  if (!loading) {
    mainJsx = (
      <MainContentNews>
        <>
          <CaroucelNews articles={articles} />
          <ListViewNews articles={articles} />
        </>
      </MainContentNews>
    );
  }
  return <Container>{mainJsx}</Container>;
}

export default Sentry.withProfiler(News);
