import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer, forecastReducer } from '../reducers/weatherReducer.js';

export const store = configureStore({
  reducer: {
    weatherData: weatherReducer,
    forecastData: forecastReducer
  },
});
