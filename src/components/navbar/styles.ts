import tw from "tailwind-styled-components"
import { Link } from "react-router-dom";
export const NavBarMenu = tw.nav`relative  bg-cyan-50 p-2 text-cyan-700 shadow-md`;
export const NavContainer = tw.div`container px-4 flex items-center justify-around`
export const LogoHome = tw.div`w-full flex lg:w-auto lg:static lg:block lg:justify-start`
export const CustomLink = tw(Link)`text-lg font-bold  inline-block mr-2  uppercase`
export const HomeItem = tw.div`flex flex-row items-center`
export const NavBarListItem = tw.div`flex flex-col lg:flex-row list-none lg:ml-auto`
export const NavItem = tw.li`nav-item`
