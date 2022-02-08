import { Popup } from "react-leaflet";
import hospitalIcon from "../../assets/hospital.svg";
import checkIcon from "../../assets/checkIcon.svg";
import "./style.css";
import { navigateToUrl } from "single-spa";
export default function MapPopup({ name, address, selectItem, place }) {
  return (
    <Popup
      onOpen={() => {
        console.log("abri o popup");
        selectItem(place);
      }}
      onClose={() => {
        console.log("fechei o popup");
      }}
      className="hospital-popup"
    >
      <div style={{ backgroundColor: "#90D8DC" }}>
        <span className="popup-title">Hospital/Posto de saúde</span>
        <div className="info">
          <div>
            <img src={hospitalIcon} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "8px",
            }}
          >
            <h1>{name}</h1>
            <h2 className="h-address">{address}</h2>
          </div>
        </div>
        <span className="popup-title">Tempo estimado de espera</span>
        <div className="info">10 minutos</div>
        <span className="popup-title">Distancia a ser percorrida</span>
        <div className="info">1,2 Km</div>
        <div style={{ marginTop: "16px", marginBottom: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={checkIcon} />
            <span className="user-hospital-check">Hospital mais próximo</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={checkIcon} />
            <span className="user-hospital-check">Atende ao seu plano</span>
          </div>
        </div>

        <button
          onClick={() => {
            console.log("confirmar ida");
            navigateToUrl("/patient/checkin");
          }}
          className="btn-popup"
        >
          Confirmar Ida
        </button>
      </div>
    </Popup>
  );
}
