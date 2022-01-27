import FrwkMap from "../../components/map";
import Parcel from "single-spa-react/parcel";

export default function Home() {
  return (
    <div>
      {/* <FrwkMap /> */}
      {/* <Parcel config={() => System.import("@frwk/frwkInfo")} /> */}
      <Parcel config={() => System.import("@frwk/frwkMap2")} />
    </div>
  );
  // return <div></div>;
}
