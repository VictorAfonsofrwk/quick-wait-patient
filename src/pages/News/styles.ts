import tw from 'tailwind-styled-components';

interface ILoading {
  loading: boolean;
}

export const Container = tw.div<ILoading>`
  p-4 
  bg-cover 
  bg-cyan-600 
  w-full
  shadow-3xl
  relative 
  flex 
  flex-col 
  items-center
  ${({ loading }) => loading ? 'h-screen' : 'h-full'}
`;

export const MainContentNews = tw.div`
  relative 
  w-3/4 
  rounded-lg 
  m-1 
  bg-sky-50
  pb-[30px]
`;