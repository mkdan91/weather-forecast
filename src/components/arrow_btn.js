import React from 'react';
import PropTypes from 'prop-types';
import SVGicon from './svg_icon';

const ArrowBtn = ({ dir, handler, disabled }) => {
  return (
    <button
      className={`arrow-btn ${dir}`}
      type='button'
      disabled={disabled}
      onClick={(e) => handler(e, dir)}>
      <SVGicon cname={`arrow-btn__icon ${dir}`} iconName={dir} />
    </button>
  );
};

ArrowBtn.propTypes = {
  dir: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};
export default ArrowBtn;