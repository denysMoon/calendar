import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, handleDateSelect, handleEventClick } from '../../utils/calendarEvents';
import { IEventContent } from '../../types';

export const Calendar = () => {
  const state = {
    weekendsVisible: true,
    currentEvents: [],
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      select={handleDateSelect}
      initialView="dayGridMonth"
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      events={INITIAL_EVENTS}
      eventContent={renderEventContent}
      weekends={state.weekendsVisible}
      eventClick={handleEventClick}
    />
  );
};

function renderEventContent(eventInfo: IEventContent) {
  return (
    <>
      <b>{eventInfo.timeText}</b> - <i>{eventInfo.event.title}</i>
    </>
  );
}
