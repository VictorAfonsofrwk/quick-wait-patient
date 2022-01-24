import { Link } from "react-router-dom";
import QuickWait from "../../assets/QuickWait.svg";
import Subtract from "../../assets/Subtract.svg";
import map from "../../assets/map.svg";
import news from "../../assets/news.svg";
import { NavBarMenu, NavContainer, LogoHome, CustomLink, HomeItem, NavBarListItem, NavItem } from './styles'
export default function NavBar() {
  return (
    <>
      <NavBarMenu>
        <NavContainer>
          <LogoHome>
            <CustomLink
              to="/patient"
            >
              <HomeItem >
                <img src={Subtract} alt="logo quick wait" />
                <img className='-mx-3.5' src={QuickWait} alt="logoquick wait" />
              </HomeItem>
            </CustomLink>
          </LogoHome>
          <NavBarListItem>
            <NavItem id="hospitais">
              <Link
                className="nav-link px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                to="patient/hospitais"
              >
                <img src={map} alt="hospitais" />
                <span className="ml-2">Hospitais</span>
              </Link>
            </NavItem>
            <NavItem id="noticias">
              <Link
                className="nav-link px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                to="patient/noticias"
              >
                <img src={news} alt="hospitais" className="text-cyan-600" />
                <span className="ml-2">Noticias</span>
              </Link>
            </NavItem>

          </NavBarListItem>
        </NavContainer>
      </NavBarMenu>
    </>
  );
}
