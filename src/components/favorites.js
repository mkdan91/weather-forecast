import React from 'react';
import PropTypes from 'prop-types';
import SVGicon from './svg_icon';

const Favorites = ({ data, handler }) => {
  return (
    <ul className='favorites'>
      {
        data.map((city) =>
          <li key={city} className='favorites-item' onClick={e => handler(city)} >
            {city}
            <SVGicon cname='favorites-item__icon' iconName='weather' />
          </li>
        )
      }
    </ul>
  );
};
Favorites.propTypes = {
  data: PropTypes.array,
  handler: PropTypes.func
};
export default Favorites;
