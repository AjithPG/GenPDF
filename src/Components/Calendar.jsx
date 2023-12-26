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
    url: "https://www.google.com/",
  },
  {
    id: 2,
    title: "Festival",
    start: "2023-12-25T10:00:00",
    end: "2023-12-25T16:00:00",
    backgroundColor: "#BFDF7CFCF",
    textColor: "#333",
  },
  {
    id: 3,
    title: "Festival",
    start: "2023-12-28T10:00:00",
    end: "2023-12-29T16:00:00",
    backgroundColor: "#BFDF7CFCF",
    textColor: "#333",
  },
  {
    id: 4,
    title: "Meeting",
    start: "2023-12-26T11:00:00",
    end: "2023-12-26T11:30:00",
    backgroundColor: "#F7CFCF",
    textColor: "black",
  },
  {
    id: 5,
    title: "Confernece",
    start: "2023-12-27T11:00:00",
    end: "2023-12-28T12:30:00",
    backgroundColor: "#F7CFCF",
    textColor: "black",
    url: "https://www.google.com/",
  },
  {
    id: 6,
    title: "Discussion",
    start: "2023-12-20T13:00:00",
    end: "2023-12-25T12:30:00",
    backgroundColor: "rgb(20 83 45)",
    textColor: "black",
  },
  {
    id: 1,
    title: "Christmas",
    start: "2023-12-25T10:00:00",
    end: "2023-12-25T16:00:00",
    backgroundColor: "#BFDF7CFCF",
    textColor: "#333",
    url: "https://www.google.com/",
  },
  {
    id: 1,
    title: "Christmas",
    start: "2023-12-25T10:00:00",
    end: "2023-12-25T16:00:00",
    backgroundColor: "#BFDF7CFCF",
    textColor: "#333",
    url: "https://www.google.com/",
  },
  {
    id: 1,
    title: "Christmas",
    start: "2023-12-25T10:00:00",
    end: "2023-12-25T16:00:00",
    backgroundColor: "#BFDF7CFCF",
    textColor: "#333",
    url: "https://www.google.com/",
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
        timeZone="timeZone: 'UTC'"
        locale={lang}
        direction={dir}
        eventLimit={3}
        headerToolbar={{
          left: "prev,next,title",
          center: "",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        selectable={true}
        select={handleSelectedDates}
        displayEventTime={true}
      />
    </>
  );
}
