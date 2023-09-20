import { store } from '.';

export interface Holiday {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: null | string[];
  launchYear: null | number;
  types: string[];
}

export type RootState = {
  counterReducer: {
    value: number;
  };
  holidaysReducer: {
    holidays: Holiday[];
    isLoading: boolean;
    error: string | null;
  };
};

export type AppDispatch = typeof store.dispatch;
