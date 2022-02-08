import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex
  w-11/12
  h-109
  justify-space-between
  p-2
  rounded-xl
  bg-white
  items-center
  my-5
  shadow-lg
  shadow-gray-300
`;

export const ImageNews = tw.div`
  bg-cover
  rounded-xl
  bg-white
  items-center
  min-w-[40%]
  max-w-[40%]
  h-[83px]
`;

export const InformationsDivNews = tw.div`
  flex
  flex-col
  flex-wrap
  w-[70%]
  justify-between
  pl-4
  pr-2
`;

export const TextNews = tw.p`
  text-black
  text-[12px]
  max-h-14
  leading-5
  block
  text-ellipsis
  break-word
  overflow-hidden
`;

export const TextDateNews = tw.p`
  text-black
  text-[10px]
  mt-2
`;

export const LinkNewsDiv = tw.div`
  flex
  w-full
  items-center
  justify-end
`;

export const LinkNews = tw.a`
  text-[#12A1A7]
  text-[10px]
  text-right
`;

export const NextIcon = tw.img`
  ml-1
`;