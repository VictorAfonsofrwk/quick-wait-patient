import ReactModal from "react-modal";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./styles.css";

const [sunday, setSunday] = useState(false);
const [monday, setMonday] = useState(false);
const [tuesday, setTuesday] = useState(false);
const [wednesday, setWednesday] = useState(false);
const [thursday, setThursday] = useState(false);
const [friday, setFriday] = useState(false);
const [saturday, setSaturday] = useState(false);

function AddReminder() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        overlayClassName="Overlay"
        contentLabel="Example Modal"
        className="Modal"
      >
        <header className="reminder-header py-4">
          <div>
            <h1 className="text-white reminder">Novo lembrete</h1>
          </div>
          <div className="mt-1 ml-6">
            <IoIosCloseCircle
              onClick={closeModal}
              className="icon-close"
              color="white"
              size={25}
            />
          </div>
        </header>
        <div className="reminder-name py-8">
          <p className="name">Nome do lembrete</p>
          <input className="mt-2" type="text" />
        </div>
        <div className="bg-white">componente selecionar hora e minutos</div>
        <div className="reminder-frequency py-4">
          <p className="frequency-text">Frequência</p>
          <div className="mt-2">
            <div>D</div>
          </div>
        </div>
        <div className="save-wrapper py-4">
          <button
            type="button"
            className="bg-white py-1 px-10 rounded-full btn-save"
          >
            Salvar lembrete
          </button>
        </div>
      </ReactModal>
    </div>
  );
}

export default AddReminder;
