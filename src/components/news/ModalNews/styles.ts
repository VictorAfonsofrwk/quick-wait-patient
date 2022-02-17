import tw from 'tailwind-styled-components';

export const ModalStyles = `
  fixed 
  flex
  flex-col
  justify-center
  items-center
  z-10 
  inset-0 
  overflow-y-auto
  bg-black/60
`;

export const ModalBody = tw.div`
  flex
  flex-col
  justify-center
  items-center
  w-3/4 
  rounded-lg 
  m-1 
  bg-sky-50
`;

export const ImageNews = tw.div`
  w-full
  h-96
  bg-cover
  rounded-t-lg 
`;

export const ImageNewCover = tw.div`
  flex
  flex-col
  justify-between
  items-start
  p-[30px]
  w-full
  h-96
  bg-cover
  rounded-t-lg 
  bg-black/30
`;

export const CloseButton = tw.button`
  place-self-end
  text-white
  lg:text-[36px]
  sm:text-[30px]
  font-bold
`;

export const CloseButtonIcon = tw.img``;

export const CardBodyNews = tw.div`
  flex
  flex-col
  lg:w-[96%]
  sm:w-[90%]
  p-[25px]
  m-[30px]
  rounded-xl
  bg-white
  items-start
  shadow-lg
  shadow-gray-300
`;

export const NewsTitle = tw.p`
  text-white
  lg:text-[36px]
  sm:text-[30px]
  font-bold
`;

export const NewsSubTitle = tw.p`
  text-black
  text-[15px]
  font-semibold
`;

export const NewsDateText = tw.p`
  text-[#969696]
  text-[13px]
  mt-[23px]
`;

export const NewsText = tw.p`
  text-black
  text-[13px]
  mt-[23px]
`;