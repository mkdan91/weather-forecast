import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WeatherSlide from '../components/weather_slide';
import ArrowBtn from '../components/arrow_btn';

const mapStateToProps = state => {
  return {
    city: state.forecast.city,
    forecasts: state.forecast.forecasts
  };
};

class Weather extends Component {
  constructor(props) {
    super(props);
    this.onSlide = this.onSlide.bind(this);
    this.state = {
      arrow: 'next',
      slideDir: ''
    };
  }
  onSlide(e, arrow) {
    if (arrow === 'next') {
      this.setState({ arrow: 'prev', slideDir: arrow });
    } else {
      this.setState({ arrow: 'next', slideDir: arrow });
    }
  }
  renderSlides = () => {
    const { city } = this.props;
    return this.props.forecasts.map((weather) =>
      <WeatherSlide key={weather.Date} data={weather} city={city} />
    );
  };
  render() {
    const { arrow, slideDir } = this.state;
    const { forecasts } = this.props;
    const slides = this.renderSlides();
    return (
      <div className='weather'>
        <div className='weather__control'>
          <ArrowBtn dir={arrow} disabled={!forecasts.length} handler={this.onSlide} />
        </div>
        <div className={`weather__slider ${slideDir}`}>
          {slides}
        </div>
      </div>
    );
  }
}
Weather.propTypes = {
  city: PropTypes.string.isRequired,
  forecasts: PropTypes.arrayOf(PropTypes.object)
};
export default connect(mapStateToProps)(Weather);