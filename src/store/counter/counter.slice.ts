import { SliceCaseReducers, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

interface CounterSliceState {
  value: number;
}

export const counterSlice = createSlice<CounterSliceState, SliceCaseReducers<CounterSliceState>>({
  name: 'counter',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.value += action.payload;
    },
    subtractNumber: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const {
  actions: { addNumber, subtractNumber },
  reducer: counterReducer,
} = counterSlice;
