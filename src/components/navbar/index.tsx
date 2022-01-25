import { Link } from "react-router-dom";
import QuickWait from "../../assets/QuickWait.svg";
import Subtract from "../../assets/Subtract.svg";
import map from "../../assets/map.svg";
import news from "../../assets/news.svg";
import {
  NavBarMenu,
  NavContainer,
  LogoHome,
  LinkToHome,
  HomeItem,
  NavBarListItem,
  NavItem,
  CustomLink
} from './styles'

export default function NavBar() {
  return (
    <>
      <NavBarMenu>
        <NavContainer>
          <LogoHome>
            <LinkToHome to="/patient">
              <HomeItem >
                <img src={Subtract} alt="logo quick wait" />
                <img className='-mx-3.5' src={QuickWait} alt="logoquick wait" />
              </HomeItem>
            </LinkToHome>
          </LogoHome>
          <NavBarListItem>
            <NavItem id="hospitais">
              <CustomLink to="patient/hospitais">
                <img src={map} alt="hospitais" />
                <span className="ml-2">Hospitais</span>
              </CustomLink>
            </NavItem>
            <NavItem id="noticias">
              <CustomLink to="patient/noticias">
                <img src={news} alt="hospitais" className="text-cyan-600" />
                <span className="ml-2">Noticias</span>
              </CustomLink>
            </NavItem>
          </NavBarListItem>
        </NavContainer>
      </NavBarMenu>
    </>
  );
}
