
export interface IArticles {
    source: {
        id: number,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}
export interface INews {
    status: string,
    totalResults: number,
    articles: IArticles[]
}