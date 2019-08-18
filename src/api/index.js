import moment from 'moment';

export const getWeekDayName = date => {
  const day = moment(date).format('YYYY-MM-DD');
  const today = moment().format('YYYY-MM-DD');
  return day === today ? 'today' : moment(date).format('dddd');
};

export const getIconName = code => {
  if (code <= 2) {
    return 'sunny';
  } if (code <= 6) {
    return 'cloud-sun';
  } if (code <= 11) {
    return 'cloudy';
  } if (code <= 21) {
    return 'rainy';
  } if (code <= 25) {
    return 'snowy';
  } if (code === 30) {
    return 'hot';
  } if (code === 31) {
    return 'cold';
  } if (code === 32) {
    return 'windy';
  }
  return 'sunny';
};

export const toCelsius = fahrenheit => {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return Math.floor(celsius);
};