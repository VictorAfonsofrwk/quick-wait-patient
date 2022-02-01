import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex
  w-382
  h-109
  justify-space-between
  p-2
  rounded-xl
  bg-white
  items-center
`;

export const ImageNews = tw.img`
  rounded-xl
  bg-white
  items-center
`;

export const InformationsDivNews = tw.div`
  flex
  flex-col
  justify-space-between
  items-center
`;

export const TextNews = tw.p`
  text-black
  text-2xl
`;

export const TextDateNews = tw.p`
  text-black
  text-1xl
`;