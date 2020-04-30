import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function FrontPage() {
  return <div id="front-page">
    <img src={require("../../assets/images/bobo.png").default}></img>
    <h1>COMING SOON!</h1>
  </div>;
};

FrontPage.propTypes = {

};

export default FrontPage;