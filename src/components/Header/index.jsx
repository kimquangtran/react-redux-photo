import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';
import Banner from './../Banner';
import Images from '../../constants/images';

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://youtube.com/easyfrontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Photo App
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              end
              className="header__link"
              to="/photos"
            >
              Photos
            </NavLink>
          </Col>
        </Row>
      </Container>
      <Banner title="Photo App" backgroundUrl={Images.PINK_BG} />
    </header>
  );
}

export default Header;