import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";

export default function Calendar() {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2023-12-01" },
          { title: "event 2", date: "2023-12-02" },
        ]}
        locale="en"
        direction="rtl"
      />
    </>
  );
}
