import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export const Calendar = () => {
  return (
    <div>
      <h1>Calendar</h1>
      <div>
        <FullCalendar plugins={[dayGridPlugin]} />
      </div>
    </div>
  );
};
