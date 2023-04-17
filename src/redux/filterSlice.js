import { createSlice } from '@reduxjs/toolkit';
import { FILTER_INITIAL_STATE } from './constants';

const filterSlice = createSlice({
  name: 'filter',
  initialState: FILTER_INITIAL_STATE,
  reducers: {
    setFilter: {
      reducer(state, action) {
      return void(state.value = action.payload);
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
