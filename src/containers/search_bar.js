import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SVGicon from '../components/svg_icon';
import Hints from '../components/hints';
import Favorites from '../components/favorites';
import { fetchWeather, getHints } from '../actions';

const mapDispatchToProps = { fetchWeather, getHints };
const mapStateToProps = state => ({
  query: state.autoComplete.query,
  hints: state.autoComplete.hints,
  favorites: state.forecast.favorites
});

class SearchBar extends Component {
  inputChange = e => {
    this.props.getHints(e.target.value);
  };

  onSelectHint = hint => {
    this.props.fetchWeather(hint);
  };

  onSelectFavorit = favorit => {
    this.props.fetchWeather(favorit);
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchWeather(this.props.query);
  };

  render() {
    const { query, hints, favorites } = this.props;
    return (
      <div className='search-bar'>
        <form className='search-form' onSubmit={this.onFormSubmit}>
          <div className='search-box'>
            <button className='search-box__btn' type='submit'>
              <SVGicon cname='search-box__icon' iconName='search' />
            </button>
            <input
              className='search-box__input'
              placeholder='Search another city..'
              value={query}
              onChange={this.inputChange}
            />
            <Hints data={hints} handler={this.onSelectHint} />
          </div>
        </form>
        <Favorites data={favorites} handler={this.onSelectFavorit} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  favorites: PropTypes.array.isRequired,
  hints: PropTypes.array.isRequired,
  getHints: PropTypes.func.isRequired,
  fetchWeather: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);