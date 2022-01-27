import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { getNews } from "../../../services/news/newsService";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { IArticles, INews } from "../../../interfaces/newsInterface";
export default function CaroucelNews() {
    const [articles, setArticles] = useState([]);
    //const [articles, setArticles] = useState('');
    async function loadNews() {
        setArticles(await getNews(''))

    }
    useEffect(() => {
        loadNews();

        return () => {
        };
    }, []);

    return <div className="rounded-t-lg p-1 ">
        <Carousel showArrows autoPlay dynamicHeight renderThumbs={(children: React.ReactChild[]) => []}>
            {articles.map((article: IArticles, index) => {
                return <div key={index}>
                    <img className="h-96" src={article.urlToImage} />
                    <p className="legend">{article.title}</p>
                </div>
            })}
        </Carousel>
    </div >
}
