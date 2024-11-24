// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import valuesReducer from '@/fetures/welcomeSlice';

const store = configureStore({
  reducer: {
    values: valuesReducer,
  },
});

export default store;
