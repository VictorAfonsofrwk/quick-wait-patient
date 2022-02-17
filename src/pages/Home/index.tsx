import FrwkMap from "../../components/map";
import Parcel from "single-spa-react/parcel";

export default function Home() {
  return (
    <>
      {/* <FrwkMap /> 
      {/* <Parcel config={() => System.import("@frwk/angularMap")} /> */}
      <Parcel config={() => System.import("@frwk/frwkMap")} />
    </>
  );
}
