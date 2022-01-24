import { Link } from "react-router-dom";
import QuickWait from "../../assets/QuickWait.svg";
import Subtract from "../../assets/Subtract.svg";
import map from "../../assets/map.svg";
import news from "../../assets/news.svg";

export default function NavBar() {
  return (
    <>
      <nav className="relative  bg-cyan-50 p-2 text-cyan-700 shadow-md">
        <div className="container px-4 flex items-center justify-around">
          <div className="w-full flex lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-lg font-bold  inline-block mr-2  uppercase "
              to="/"
            >
                <div className="flex flex-row items-center">
              <img  src={Subtract} alt="logo quick wait" />
              <img className = '-mx-3.5'src={QuickWait} alt="logoquick wait" />
              </div>
            </Link>
          </div>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li id="hospitais" className="nav-item">
              <Link
                className="nav-link px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                to="patient/hospitais"
              >
                <img src={map} alt="hospitais" />
                <span className="ml-2">Hospitais</span>
              </Link>
            </li>
            <li id="noticias" className="nav-item">
              <Link
                className="nav-link px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                to="patient/noticias"
              >
                <img src={news} alt="hospitais" className="text-cyan-600" />
                <span className="ml-2">Noticias</span>
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}
