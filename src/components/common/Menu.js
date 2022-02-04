import React from 'react';
import {Route, Link, Switch, useLocation} from 'react-router-dom';
import './menu.scss';

function MenuLink () {

};

function Menu () {
  return <div id="menu" className="page">
    <Link className='menu-lv-0' to="/">DAN SOUP</Link>
    {/* <Link className='menu-lv-1' to="/blog">BLOG</Link> */}
    {/* <Link className='menu-lv-2' to="/blog/latest">  LATEST</Link> */}
    <Link className='menu-lv-1' to="/projects">PROJECTS</Link>
    {/* <Link className='menu-lv-1' to="/games">GAMES</Link> */}
    {/* <Link className='menu-lv-1' to="/links">LINKS</Link> */}
    <Link className='menu-lv-1' to="/about">ABOUT</Link>
  </div>;
};

export default Menu;