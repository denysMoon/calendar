import { PayloadAction, SliceCaseReducers, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HolidaysState } from '../types';

interface HolidaysSliceState {
  holidays: HolidaysState[];
  isLoading: false;
  error: string | null;
}

const initialState: HolidaysSliceState = {
  holidays: [],
  isLoading: false,
  error: null,
};

export const fetchHolidays = createAsyncThunk<HolidaysSliceState, string>(
  'holidays/fetchByCountry',
  async (country, { rejectWithValue }) => {
    // Temp hardcoded
    const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/2023/${country}`);
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  },
);

export const holidaysSlice = createSlice<HolidaysSliceState, SliceCaseReducers<HolidaysSliceState>>({
  name: 'holidays',
  initialState,
  reducers: {
    addHoliday: (state, action: PayloadAction<HolidaysState>) => ({
      ...state,
      holidays: [...state.holidays, action.payload],
    }),
  },
  extraReducers: {
    [fetchHolidays.pending.toString()]: (state) => ({
      ...state,
      error: null,
      loading: true,
    }),
    [fetchHolidays.fulfilled.toString()]: (state, action) => ({
      ...state,
      holidays: action.payload,
      loading: false,
    }),
    [fetchHolidays.rejected.toString()]: (state, action: { payload: string }) => ({
      ...state,
      error: action.payload,
      loading: false,
      holidays: [],
    }),
  },
});

export const {
  actions: { addHoliday },
  reducer: holidaysReducer,
} = holidaysSlice;
