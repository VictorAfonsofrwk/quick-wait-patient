import "./styles.css";
import { useEffect, useState } from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import AddReminder from "../AddReminder";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/daygrid/main.css";
const ViewReminders = () => {
  const [value, onChange] = useState(new Date(2021, 0, 2));
  const [showReminderModal, setShowReminderModal] = useState(false);

  const onEventDetail = (event) => {};

  function openAddModal() {
    setShowReminderModal(true);
  }
  return (
    <div className="reminder-container">
      <div className="flex flex-col align-center justify-center">
        <div>
          <h1 className="text-white py-6 title text-center">Lembretes</h1>
        </div>
        <div className="flex align-center justify-center p-2">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              {
                title: "event 1",
                date: "2022-02-03",
                extendedProps: {
                  details: "Evento 1",
                },
              },
              {
                title: "event 2",
                date: "2022-02-05",
                extendedProps: {
                  details: "Evento 2",
                },
              },
            ]}
            editable
            eventClick={(e) => {
              const event = new CustomEvent(
                "@frwk/react-profile/reminder-detail",
                {
                  detail: {
                    title: e.event.title,
                    date: e.event.start,
                    details: e.event.extendedProps.details,
                    showModal: true,
                  },
                }
              );
              //document.querySelector("#root").dispatchEvent(event);
              window.dispatchEvent(event);
            }}
          />
        </div>
        <div className="flex align-center justify-center mt-2 flex p-4">
          <div className="w-24 flex">
            <div>
              <div className="w-4 h-4 rounded-full mt-6 bg-green-400 " />
            </div>
            <div className="ml-4 flex flex-col text-white">
              <div className="font-medium font-quicksand date mt-1">18</div>
              <div className="font-quicksand">SAB</div>
            </div>
          </div>
          <div className="w-64  bg-white rounded p-2">
            <div className="flex">
              <div className="reminder-text">Nome Remédio</div>
              <div className="flex justify-end icon-container">
                <MdOutlineNotificationsActive color="#12A1A7" size={23} />
              </div>
            </div>
            <div className="flex mt-2">
              <div className="reminder-time font-medium ">13:00</div>
              <div className="reminder-week-days flex justify-end">
                D, S, T, Q, Q, S, S
              </div>
            </div>
          </div>
        </div>

        <div className="flex align-center justify-center mt-2 flex p-4">
          <div className="w-24 flex">
            <div>
              <div className="w-4 h-4 rounded-full mt-6 bg-green-400 " />
            </div>
            <div className="ml-4 flex flex-col text-white">
              <div className="font-medium font-quicksand date mt-1">18</div>
              <div className="font-quicksand">SAB</div>
            </div>
          </div>
          <div className="w-64  bg-white rounded p-2">
            <div className="flex">
              <div className="reminder-text">Nome Remédio</div>
              <div className="flex justify-end icon-container">
                <MdOutlineNotificationsActive color="#12A1A7" size={23} />
              </div>
            </div>
            <div className="flex mt-2">
              <div className="reminder-time font-medium ">13:00</div>
              <div className="reminder-week-days flex justify-end">
                D, S, T, Q, Q, S, S
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex align-center justify-center py-3 add-icon"
          onClick={openAddModal}
        >
          <AiFillPlusCircle color="white" size={33} />
        </div>
        {showReminderModal && <AddReminder />}
      </div>
    </div>
  );
};
export default ViewReminders;
