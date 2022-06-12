import React, { useEffect, useState } from 'react';
import {Route, Link, Switch, useLocation} from 'react-router-dom';
import About from '../About/index';
import Blog from '../Blog/index';
import Projects from '../Projects/index';
import Menu from '../common/Menu';
import NotFound from '../common/NotFound';

const MainPage = (props) => {
  let location = useLocation();

  return <div id="main-page">
    <div className=""></div>
    <Menu></Menu>
    <div className="content" style={{flexGrow: location.pathname === '/' ? 0 : 1}}>
      <Blog/>
      <Projects/>
      <About/>
      {/* <NotFound/> */}
    </div>
  </div>

}

MainPage.propTypes = {

};

export default MainPage;