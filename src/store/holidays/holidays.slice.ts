import { PayloadAction, SliceCaseReducers, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HolidaysState } from '../types';
import { BASE_URL } from '@/constants';

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
    // TODO: take time to think how to in the optimal way set year
    // TODO: try/catch
    const response = await fetch(`${BASE_URL}/PublicHolidays/2023/${country}`);
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
    addHoliday: (state, action: PayloadAction<HolidaysState>) => {
      console.log(action);
      return {
        ...state,
        holidays: [...state.holidays, action.payload],
      };
    },
    deleteHoliday: (state, action: PayloadAction<string>) => {
      const idToDelete = action.payload;

      return {
        ...state,
        holidays: state.holidays.filter((holiday) => holiday.id !== idToDelete),
      };
    },
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
  actions: { addHoliday, deleteHoliday },
  reducer: holidaysReducer,
} = holidaysSlice;
