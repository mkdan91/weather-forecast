import React from 'react';
import PropTypes from 'prop-types';

const Hints = ({ data, handler }) => {
  return (
    <ul className='hints'>
      {
        data.map((hint) =>
          <li key={hint} className='hints__item' onClick={(e) => handler(hint)}>
            {hint}
          </li>
        )
      }
    </ul>
  );
};
Hints.propTypes = {
  data: PropTypes.array,
  handler: PropTypes.func
};
export default Hints;