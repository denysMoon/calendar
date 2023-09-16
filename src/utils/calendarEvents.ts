import { DateSelectArg, EventClickArg, EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const todayString = new Date().toISOString().replace(/T.*$/, '');

export const createEventId = () => String(eventGuid++);

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayString,
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayString + 'T12:00:00',
  },
];

export const handleEventClick = (clickInfo: EventClickArg) => {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove();
  }
};

export const handleAddEvent = (
  title: string,
  selectInfo: DateSelectArg,
  setModalVisible: (argument0: boolean) => void,
  color?: string,
) => {
  const calendarApi = selectInfo?.view.calendar;
  calendarApi?.unselect();

  if (title && calendarApi) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      color,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
  }

  setModalVisible(false);
};
