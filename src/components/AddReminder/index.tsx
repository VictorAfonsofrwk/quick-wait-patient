import ReactModal from "react-modal";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import InputMask from 'react-input-mask';
import "./styles.css";
import { KeyboardTimePicker } from "@material-ui/pickers";
function AddReminder() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(true);
  const [sunday, setSunday] = useState(true);
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [selectedDate, handleDateChange] = useState(new Date());

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function toggleDayActive(day: string) {
    if(day === 'sunday') {
      setSunday(!sunday)
    }
    if(day === 'monday') {
      setMonday(!monday)
    }
    if(day === 'tuesday') {
      setTuesday(!tuesday)
    }
    if(day === 'wednesday') {
     setWednesday(!wednesday)
    }
    if(day === 'thursday') {
      setThursday(!thursday)
    }
    if(day === 'friday') {
      setFriday(!friday)
    }
    if(day === 'saturday') {
      setSaturday(!saturday)
    }
  }

  const onChange = (event) => {
    this.set({
      value: event.target.value
    });
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
        <div className="bg-white flex justify-center align-center py-8">
        <KeyboardTimePicker
        ampm={false}
        variant="inline"
        label="Horário"
        value={selectedDate}
        onChange={handleDateChange}
      />
        </div>
        <div className="reminder-frequency mt-4 py-4">
          <p className="frequency-text">Frequência</p>
          <div className="mt-6 flex gap-2">
            <div className={'day px-3 py-1 ' +(sunday ? 'active-day' : 'bg-white')} onClick={()=> toggleDayActive('sunday')}>
              D
            </div>

            <div className={'day px-3 py-1 ' +(monday ? 'active-day' : 'bg-white')} onClick={()=> toggleDayActive('monday')}>
              S
            </div>

            <div className={'day px-3 py-1 ' +(tuesday ? 'active-day' : 'bg-white')} onClick={()=> toggleDayActive('tuesday')}>
              T
            </div>

            <div className={'day px-3 py-1 ' +(wednesday ? 'active-day' : 'bg-white')} onClick={()=> toggleDayActive('wednesday')}>
              Q
            </div>

            <div className={'day px-3 py-1 ' +(thursday ? 'active-day' : 'bg-white')} onClick={()=> toggleDayActive('thursday')}>
              Q
            </div>

            <div className={'day px-3 py-1 ' +(friday ? 'active-day' : 'bg-white')} onClick={()=> toggleDayActive('friday')}>
              S
            </div>

            <div className={'day px-3 py-1 ' +(saturday ? 'active-day' : 'bg-white')} onClick={()=> toggleDayActive('saturday')}>
              S
            </div>
            
          </div>
          <div className="mt-10 flex">
            <div>
              <p className="reminder-active">
              Marcador
              </p>
            </div>
            <div className="mt-1 ml-2">
              <input type="checkbox" />
            </div>
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
