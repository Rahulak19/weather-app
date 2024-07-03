import { createSlice } from '@reduxjs/toolkit';

const initialWeatherState = {
    data: []
};

const initialForecastState = {
    data: []
};

export const weatherSlice = createSlice({
  name: 'weatherData',
  initialState: initialWeatherState,
  reducers: {
    addWeatherData: (state, action) => {
      state.data=action.payload;
    }
  },
});

export const forecastSlice = createSlice({
    name: 'forecastData',
    initialState: initialForecastState,
    reducers: {
      addForecastData: (state, action) => {
        state.data=action.payload;
      }
    },
});

export const { addWeatherData } = weatherSlice.actions;
export const { addForecastData } = forecastSlice.actions;
export const weatherReducer = weatherSlice.reducer;
export const forecastReducer = forecastSlice.reducer;
