import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentFloor: 1, // Starting at floor 1
};

const elevatorSlice = createSlice({
  name: 'elevator',
  initialState,
  reducers: {
    moveToFloor: (state, action) => {
      state.currentFloor = action.payload;
    },
  },
});

export const { moveToFloor } = elevatorSlice.actions;

export default elevatorSlice.reducer;
