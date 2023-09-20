import { SliceCaseReducers, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Holiday } from '../types';

interface HolidaysSliceState {
  holidays: Holiday[];
}

const initialState = {
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
  reducers: {},
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
    }),
  },
});

export const { reducer: holidaysReducer } = holidaysSlice;
