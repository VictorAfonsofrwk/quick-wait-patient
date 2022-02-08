import Parcel from "single-spa-react/parcel";
export default function Login() {
    return (
        <>
            {/* <FrwkMap /> */}
            {/* <Parcel config={() => System.import("@frwk/angularMap")} /> */}
            <Parcel config={() => System.import("@frwk/profile")} />
        </>
    );
}
