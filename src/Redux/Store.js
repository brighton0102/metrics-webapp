// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './CountryDetails/CountryDetailsSlice';
import countriesReducer from './Countries/CountriesSlice';

const store = configureStore({
  reducer: {
    country: countryReducer,
    countries: countriesReducer,
  },
});

export default store;
