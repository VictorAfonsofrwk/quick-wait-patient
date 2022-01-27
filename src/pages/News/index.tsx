import CaroucelNews from '../../components/news/CaroucelNews';
import MainContentNews from '../../components/news/MainContentNews';
//18, 161, 167, 1
export default function News() {
    return <div className='p-4 bg-cover bg-cyan-600 w-screen h-screen shadow-3xl  relative flex flex-col items-center'>
        <MainContentNews>
            <CaroucelNews />
        </MainContentNews>

    </div>;
}
