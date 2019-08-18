import api from './api';
import {
  FETCH_WEATHER,
  GET_HINTS
} from '../constants';
const apiKey = 'rNyrkDtpHftBSAXdNdSMJBsZ0AEI05E7';

export const fetchWeather = city => async dispatch => {
  try {
    const location = await api.get(`locations/v1/cities/search?apikey=${apiKey}&q=${city}`);
    const { Key, LocalizedName } = location.data[0];
    const response = await api.get(`forecasts/v1/daily/5day/${Key}?apikey=${apiKey}`);
    dispatch({
      type: FETCH_WEATHER,
      payload: { weather: response.data, city: LocalizedName }
    });
  } catch (e) {
    console.log(e);
  }
};

export const getHints = (query) => {
  return {
    type: GET_HINTS,
    payload: { query }
  };
};