import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { holidaysReducer } from './holidays/holidays.slice';

const reducers = combineReducers({
  holidaysReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
