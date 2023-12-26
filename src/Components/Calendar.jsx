import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { useEffect, useState } from "react";
import "./Calendar.css";
//import Events from "./events.json";

const eventList = [
  {
    id: 1,
    title: "Christmas",
    start: "2023-12-25T10:00:00",
    end: "2023-12-25T16:00:00",
    backgroundColor: "#BFDF7CFCF",
    textColor: "#333",
    allDay: true,
  },
  {
    id: 2,
    title: "Festival",
    start: "2023-12-27T12:00:00",
    end: "2023-12-29T20:00:00",
    backgroundColor: "#BFDF7CFCF",
    textColor: "#333",
    allDay: true,
  },
  {
    id: 3,
    title: "Festival",
    start: "2023-12-27",
    end: "2023-12-29",
    backgroundColor: "#BFDF7CFCF",
    textColor: "#333",
    allDay: true,
  },
  {
    id: 4,
    title: "Festival",
    start: "2023-12-27",
    end: "2023-12-29",
    backgroundColor: "#F7CFCF",
    textColor: "black",
    allDay: true,
  },
  {
    id: 5,
    title: "Events",
    start: "2023-12-19",
    end: "2024-01-01",
    backgroundColor: "#F7CFCF",
    textColor: "black",
    allDay: true,
  },
];

export default function Calendar() {
  const [lang, setLang] = useState("en");
  const [dir, setDir] = useState("ltr");
  const [events, setEvents] = useState(eventList);

  useEffect(() => {
    lang === "ar" ? setDir("rtl") : setDir("ltr");
  }, [lang]);

  const handleLang = (e) => {
    setLang(e.target.value);
  };

  const handleSelectedDates = (info) => {
    // console.log(info);
    alert(`Date start from ${info.startStr} to ${info.endStr}`);
    const title = prompt("Enter your event name");
    //console.log(title);
    if (title) {
      const newEvent = {
        id: events.length + 1,
        title,
        start: info.startStr,
        end: info.endStr,
        backgroundColor: "#F7CFCF",
        textColor: "black",
        allDay: true,
      };

      // console.log(events);
      // const data = [...events, newEvent];
      setEvents([...events, newEvent]);
      // console.log(data);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center mt-5">
        <select
          value={lang}
          onChange={(e) => handleLang(e)}
          className="bg-white"
        >
          <option value={"en"}>EN</option>
          <option value={"ar"}>AR</option>
        </select>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        locales={allLocales}
        locale={lang}
        direction={dir}
        headerToolbar={{
          left: "prev,next,title",
          center: "",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        selectable={true}
        select={handleSelectedDates}
      />
    </>
  );
}
