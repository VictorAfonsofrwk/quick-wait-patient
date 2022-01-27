import tw from 'tailwind-styled-components';

export const Container = tw.body`
  bg-[#12A1A7]
  w-full
  lg:h-screen
  lg:absolute
  lg:top-0
  sm:h-full
  flex
  flex-col
  justify-center
  pt-32
`;

export const CheckInContainer = tw.div`
  grid
  grid-cols-1
  lg:grid-cols-2
`;

export const CheckDiv = tw.div`
  flex
  flex-col
  items-center
  justify-center
  p-8
  sm:p-12
`;

export const CheckIcon = tw.img`
  w-96 
  h-96
`;

export const CheckText = tw.h1`
  text-white
  lg:text-5xl
  text-4xl
  mt-10
  text-center
  font-bold
`;

export const TimeCheckinDiv = tw.div`
  lg:flex
  lg:flex-col
  lg:items-center
  lg:justify-center
  p-8
  sm:p-12
`;

export const TimeBox = tw.div`
  items-center
  justify-center
  py-12
  px-6
  bg-[#E4FDFF]
  rounded-xl
  mt-20
`;

export const TimeText = tw.h1`
  text-[#12A1A7]
  lg:text-9xl
  text-7xl
  text-center
  font-bold
`;

export const FooterButtonDiv = tw.div`
  min-h-[10vh]]
  flex
  items-center
  justify-center
  mt-20
  p-8
`;

export const CancelButton = tw.button`
  bg-[#C86C6C]
  items-center
  rounded-xl
  py-2
  px-4
  text-[#E4FDFF]
  text-2xl
  font-bold
`;