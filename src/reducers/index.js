import { combineReducers } from 'redux';
import {
  FETCH_WEATHER,
  GET_HINTS
} from '../constants';

const defaultState = {
  city: '',
  query: '',
  hints: [],
  forecasts: [],
  favorites: [],
  maxFavor: 5,
  options: ['Tel Aviv', 'Ramat Gan', 'Rehovot', 'Ramallah', 'Givatayim', 'Jerusalem', 'Eilat']
};

function forecastReducer(state = defaultState, action) {
  if (action.type === FETCH_WEATHER) {
    const { city, weather } = action.payload;
    let filteredFavorites = [];
    if (!state.favorites.includes(city)) {
      if (state.favorites.length < state.maxFavor) {
        filteredFavorites = [...state.favorites, city];
      } else {
        filteredFavorites = [...state.favorites.slice(1), city];
      }
    } else {
      filteredFavorites = [...state.favorites];
    }
    return {
      ...state,
      city,
      forecasts: weather.DailyForecasts,
      favorites: filteredFavorites
    };
  }
  return state;
}

function autoCompleteReducer(state = defaultState, action) {
  let query = '';
  let hints = [];
  if (action.type === GET_HINTS) {
    query = action.payload.query;
    if (query && query.trim()) {
      hints = state.options.filter(option => {
        return option.toLowerCase().startsWith(query.toLowerCase());
      });
    }
  }
  return { ...state, query, hints };
}

export default combineReducers({
  forecast: forecastReducer,
  autoComplete: autoCompleteReducer
});
