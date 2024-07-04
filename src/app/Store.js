// store.js
import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer, forecastReducer } from '../reducers/weatherReducer';

export const store = configureStore({
  reducer: {
    weatherData: weatherReducer,
    forecastData: forecastReducer,
  },
});
