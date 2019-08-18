import React from 'react';
import SVGicon from './svg_icon';
import {
  getIconName,
  getWeekDayName,
  toCelsius,
} from '../api';

const WeatherSlide = ({ city, data }) => {
  const { Date, Day, Temperature } = data;
  const day = getWeekDayName(Date);
  const iconName = getIconName(Day.Icon);
  const maxTemp = toCelsius(Temperature.Maximum.Value);
  const minTemp = toCelsius(Temperature.Minimum.Value);

  return (
    <div className={`slider-card ${day}`}>
      <p className='slider-card__city'> {city} </p>
      <p className='slider-card__day'>{day}</p>
      <SVGicon cname='slider-card__icon' iconName={iconName} />
      <p className='slider-card__temp'>{minTemp}&#176;
        <span className='slider-card__temp --max'> / {maxTemp}&#176;</span>
      </p>
      <p className='slider-card__desc'>{Day.IconPhrase}</p>
    </div>
  );
};
export default WeatherSlide;