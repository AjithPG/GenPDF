import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import "./Calendar.css";

export default function Calendar() {
  const [lang, setLang] = useState("en");
  const [dir, setDir] = useState("ltr");

  const handleLang = (e) => {
    setLang(e.target.value);
    // lang === "ar" ? setDir("rtl") : setDir("ltr");
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
        events={[
          { title: "event 1", date: "2023-12-01" },
          { title: "event 2", date: "2023-12-02" },
        ]}
        locale={lang}
        direction={dir}
        headerToolbar={{
          left: "title,prev,next",
          center: "",
          right: "timeGridDay,timeGridWeek,dayGridMonth",
        }}
      />
    </>
  );
}
