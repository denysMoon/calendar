import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter/counter.slice';
import { holidaysReducer } from './holidays/holidays.slice';

const reducers = combineReducers({
  counterReducer,
  holidaysReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
