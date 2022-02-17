
import { getService } from "../api/generalApiService";
const API_KEY = 'b114a79ce39e43d38fb409be42f195bb'
const BASE_URL = `https://newsapi.org/v2/`
export async function getNews(url: string) {
    try {
        url = `top-headlines?category=health&country=br&language=pt&apiKey=${API_KEY}`
        const { articles } = await getService(BASE_URL, url)
        return articles
    } catch (error) {

    }
}