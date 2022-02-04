import React from 'react';
import './about.scss';

function About() {
  return <div id="about" style={{height: /^\/about/.test(window.location.pathname) ? '100vh' : 0}}>
    <div>
      <h1>Hi. I'm Dan Soup.</h1>
      <p>This is my website.</p>
      <p>I'm a full stack developer, mathematician, artist and former esports tournament organizer.</p>
      <p>This website will contain my various projects accross multiple mediums.</p>
    </div>
  </div>;
};

export default About;