import { configureStore } from '@reduxjs/toolkit';
import elevatorReducer from './elevatorSlice';

export const store = configureStore({
  reducer: {
    elevator: elevatorReducer,
  },
});
