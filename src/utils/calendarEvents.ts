import { EventClickArg } from '@fullcalendar/core';

export const handleEventClick = (clickInfo: EventClickArg) => {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove();
  }
};
