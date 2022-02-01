import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { IArticles } from "../../../interfaces/newsInterface";

interface IListArticles {
  articles: IArticles[];
}

export default function CaroucelNews({ articles }: IListArticles) {
  return <div className="rounded-t-lg p-1 ">
    <Carousel 
      showArrows 
      autoPlay 
      dynamicHeight 
      renderThumbs={(children: React.ReactChild[]) => []}>
      {articles.map((article: IArticles, index) => {
        return <div key={index}>
          <img className="h-96" src={article.urlToImage} />
          <p className="legend">{article.title}</p>
        </div>
      })}
    </Carousel>
  </div >
}
