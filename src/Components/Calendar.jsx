import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import "./Calendar.css";
import Events from "./events";

export default function Calendar() {
  const [lang, setLang] = useState("en");
  const [dir, setDir] = useState("ltr");
  useEffect(() => {
    lang === "ar" ? setDir("rtl") : setDir("ltr");
  }, [lang]);

  const handleLang = (e) => {
    setLang(e.target.value);
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
        events={Events}
        locale={lang}
        direction={dir}
        headerToolbar={{
          left: "prev,next,title",
          center: "",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />
    </>
  );
}
