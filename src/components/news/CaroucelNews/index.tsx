import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IArticles } from "../../../interfaces/newsInterface";
import { Container, ImageNews } from "./styles";

interface IListArticles {
  articles: IArticles[];
}

export default function CaroucelNews({ articles }: IListArticles) {
  return (
    <Container>
      <Carousel
        showArrows
        autoPlay
        dynamicHeight
        renderThumbs={(children: React.ReactChild[]) => []}
      >
        {articles?.slice(0, 5).map((article: IArticles, index) => {
          return (
            <div key={index}>
              <ImageNews
                style={{ backgroundImage: `url(${article.urlToImage})` }}
              />
              <p className="legend">{article.title}</p>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
}
