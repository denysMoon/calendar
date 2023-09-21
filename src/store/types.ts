import { store } from '.';

export interface Holiday {
  date?: string;
  localName?: string;
  name?: string;
  countryCode?: string;
  fixed?: boolean;
  global?: boolean;
  counties?: null | string[];
  launchYear?: null | number;
  types?: string[];
}

export interface HolidaysState extends Holiday {
  title?: string;
  color?: string;
  start?: string;
  end?: string;
  allDay: boolean;
}

// id: createEventId(),
// title,
// color,
// start: selectInfo.startStr,
// end: selectInfo.endStr,
// allDay: selectInfo.allDay,

export type AppDispatch = typeof store.dispatch;
