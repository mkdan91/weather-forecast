import React from 'react';
import PropTypes from 'prop-types';
import path from '../assets/sprite.svg';

const SVGicon = ({ cname, iconName }) => {
  return (
    <svg className={cname}>
      <use xlinkHref={`${path}#icon-${iconName}`} />
    </svg>
  );
};

SVGicon.propTypes = {
  cname: PropTypes.string,
  iconName: PropTypes.string
};
export default SVGicon;