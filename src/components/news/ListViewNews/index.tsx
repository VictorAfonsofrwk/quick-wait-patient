import CardNews from "../CardNews";
import { Container } from "./styles";
import { IArticles } from "../../../interfaces/newsInterface";

interface IListArticles {
  articles: IArticles[];
}

const ListViewNews = ({ articles }: IListArticles) => {
  return (
    <Container>
      {[articles?.slice(5, articles.length).map((article: IArticles, index) => (
        <CardNews article={article} index={index} />
      ))]}
    </Container>
  );
};

export default ListViewNews;
