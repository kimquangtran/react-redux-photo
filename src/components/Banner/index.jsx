import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

Banner.propTypes = {
  title: PropTypes.string,
  backgroundUrl: PropTypes.string
};

Banner.defaultProps = {
  title: 'Photo App',
  backgroundUrl: ''
}

function Banner(props) {
  const { title, backgroundUrl } = props;

  const bannerStyle = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : {}


  return (
    <div
      className="banner"
      style={bannerStyle}>
      <h1 className="banner__title">{title}</h1>
    </div>
  );
}

export default Banner;