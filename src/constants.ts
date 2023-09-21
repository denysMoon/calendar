export const DOMAIN = import.meta.env.VITE_REACT_AUTH0_DOMAIN;
export const CLIENT_ID = import.meta.env.VITE_REACT_AUTH0_CLIENT_ID;

export const BASE_URL = 'https://date.nager.at/api/v3/';
export const ROUTES = [
  {
    path: '/',
    name: 'Calendar',
  },
  {
    path: '/about',
    name: 'About',
  },
];

export const LABELS = {
  TYPE_TITLE: 'Type title',
  TYPE_DESCRIPTION: 'Type description',
};

export const BUTTONS = {
  SAVE: 'Save',
  CLOSE: 'Close',
  GO_TO_MAIN: 'Go to Main',
  SAVE_CALENDAR_AS_IMAGE: 'Save calendar',
  DELETE: 'Are you sure? Delete?',
  LOGIN: 'Login',
  LOG_OUT: 'Log out',
};

export const TITLES = {
  PAGE_NOT_FOUND: 'Page not found',
  ABOUT: 'About',
};

export const COLORS = ['BLUE', 'GREEN', 'YELLOW', 'ORANGE', 'RED', 'PURPLE', 'INDIGO', 'PINK'];

// Will be more messages
export const ALERTS = {
  PLEASE_LOGIN_FOR_BETTER_EXPERIENCE: 'Please login for better experience',
};
