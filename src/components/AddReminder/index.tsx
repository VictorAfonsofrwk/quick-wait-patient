import ReactModal from "react-modal";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./styles.css";
import { KeyboardTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

interface daysOfWeek {
  sunday: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
}
function AddReminder() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(true);
  const [daysOfWeek, setDaysOfWeek] = useState<daysOfWeek>({
    sunday: false,
    monday: false,
    tuesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  } as daysOfWeek);
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
    setDaysOfWeek({
      ...daysOfWeek,
      [day]: !daysOfWeek[day],
    });
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
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
              <div
                className={
                  "day px-3 py-1 " +
                  (daysOfWeek.sunday ? "active-day" : "bg-white")
                }
                onClick={() => toggleDayActive("sunday")}
              >
                D
              </div>

              <div
                className={
                  "day px-3 py-1 " +
                  (daysOfWeek.monday ? "active-day" : "bg-white")
                }
                onClick={() => toggleDayActive("monday")}
              >
                S
              </div>

              <div
                className={
                  "day px-3 py-1 " +
                  (daysOfWeek.tuesday ? "active-day" : "bg-white")
                }
                onClick={() => toggleDayActive("tuesday")}
              >
                T
              </div>

              <div
                className={
                  "day px-3 py-1 " +
                  (daysOfWeek.wednesday ? "active-day" : "bg-white")
                }
                onClick={() => toggleDayActive("wednesday")}
              >
                Q
              </div>

              <div
                className={
                  "day px-3 py-1 " +
                  (daysOfWeek.thursday ? "active-day" : "bg-white")
                }
                onClick={() => toggleDayActive("thursday")}
              >
                Q
              </div>

              <div
                className={
                  "day px-3 py-1 " +
                  (daysOfWeek.friday ? "active-day" : "bg-white")
                }
                onClick={() => toggleDayActive("friday")}
              >
                S
              </div>

              <div
                className={
                  "day px-3 py-1 " +
                  (daysOfWeek.saturday ? "active-day" : "bg-white")
                }
                onClick={() => toggleDayActive("saturday")}
              >
                S
              </div>
            </div>
            <div className="mt-10 flex">
              <div>
                <p className="reminder-active">Marcador</p>
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
    </MuiPickersUtilsProvider>
  );
}

export default AddReminder;
