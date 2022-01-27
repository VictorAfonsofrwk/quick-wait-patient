import tw from "tailwind-styled-components"
import {
  Link,
  useMatch,
  useResolvedPath
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";
export const NavBarMenu = tw.nav`
  relative
  px-3  
  bg-cyan-50 
  text-cyan-700 
  shadow-md
`;

export const NavContainer = tw.div`
  flex 
  items-center 
`;

export const LogoHome = tw.div`
  w-full 
  flex 
  lg:w-auto 
  lg:static 
  lg:block 
  lg:justify-start
`;

export const LinkToHome = tw(Link)`
  text-lg 
  font-bold  
  inline-block 
  mr-2  
  uppercase
`;

export const HomeItem = tw.div`
  flex 
  flex-row 
  items-center
`;

export const NavBarListItem = tw.div`
  flex
  w-1/2
  flex-row
  justify-around
  space-x-2
  items-center
  lg:flex-row 
  list-none 
  lg:ml-auto
`;

export const NavItem = tw.li``;

export const CustomLink = tw(Link)`
  nav-link
  text-xs
  flex
  flex-row
  items-center
  justify-around 
  font-bold 
  hover:opacity-75
`;