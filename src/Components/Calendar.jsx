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
    textColor: "rgb(39 39 42)",
    backgroundColor: "rgb(125 211 252)",
  },
  {
    id: 2,
    title: "Festival",
    start: "2023-12-25T10:00:00",
    end: "2023-12-26T16:00:00",
    textColor: "rgb(39 39 42)",
    backgroundColor: "rgb(125 211 252)",
  },
  {
    id: 3,
    title: "Festival",
    start: "2023-12-28T10:00:00",
    end: "2023-12-29T16:00:00",
    textColor: "rgb(39 39 42)",
    backgroundColor: "rgb(125 211 252)",
  },
  {
    id: 4,
    title: "Meeting",
    start: "2023-12-26T11:00:00",
    end: "2023-12-26T11:30:00",
    textColor: "rgb(39 39 42)",
    backgroundColor: "rgb(125 211 252)",
  },
  {
    id: 5,
    title: "Confernece",
    start: "2023-12-27T11:00:00",
    end: "2023-12-28T12:30:00",
    textColor: "rgb(39 39 42)",
    backgroundColor: "rgb(125 211 252)",
  },
  {
    id: 6,
    title: "Discussion",
    start: "2023-12-20T13:00:00",
    end: "2023-12-25T12:30:00",
    textColor: "rgb(39 39 42)",
    backgroundColor: "rgb(125 211 252)",
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

  // const handleSelectedDates = (info) => {
  //   // console.log(info);
  //   alert(`Date start from ${info.startStr} to ${info.endStr}`);
  //   const title = prompt("Enter your event name");
  //   //console.log(title);
  //   if (title) {
  //     const newEvent = {
  //       id: events.length + 1,
  //       title,
  //       start: info.startStr,
  //       end: info.endStr,
  //       backgroundColor: "#F7CFCF",
  //       textColor: "black",
  //       allDay: true,
  //     };

  //     // console.log(events);
  //     // const data = [...events, newEvent];
  //     setEvents([...events, newEvent]);
  //     // console.log(data);
  //   }
  // };

  const handleEvent = (arg) => {
    return (
      // <div className="collapse collapse-arrow bg-blue-200 fc-event">
      //   <input type="radio" name="my-accordion-2" checked="checked" readOnly />
      //   <div className="collapse-title text-sm">{arg.event.title}</div>
      //   <div className="collapse-content">
      //     <p>hello</p>
      //   </div>
      // </div>
      <details className="collapse collapse-arrow  w-full flex flex-col relative px-3 py-2">
        <summary className="collapse-title">{arg.event.title}</summary>
        <div className="w-full flex justify-end gap-2 collapse-content">
          <button>Accept</button>
          <button>Reject</button>
        </div>
      </details>
      // <div className="bg-blue-200 text-black w-full flex flex-col relative px-3 py-2">
      //   <div className="absolute right-2 cursor-pointer">
      //     <img src="dropdown-arrow-svgrepo-com.svg" />
      //   </div>

      //   <div className="w-full">
      //     <p>{arg.event.title}</p>
      //   </div>

      //   <div className="w-full flex justify-end absolute w-full ">
      //     <button>Accept</button>
      //     <button>Reject</button>
      //   </div>
      // </div>
    );
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
        dayMaxEvents={3}
        locales={allLocales}
        timeZone="UTC"
        locale={lang}
        direction={dir}
        headerToolbar={{
          left: "prev,next,title",
          center: "",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        // selectable={true}
        // select={handleSelectedDates}
        eventContent={handleEvent}
        eventClassNames="myclass"
      />
    </>
  );
}
