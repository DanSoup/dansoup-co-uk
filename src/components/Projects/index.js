import React from 'react';
import './projects.scss';
import {Link} from 'react-router-dom';
import { nameToUrl } from '../common';

const projects = [
  {
    label: 'HTML Canvas 3D Engine',
    content: () => {
      return <div>
        <p>
          An HTML Canvas element that can be used to emulate 3d graphics.
        </p>
        <p>
          Due to my interest in video game development, mathematics and shapes in general I decided to create my own 3D engine using JavaScript and an HTML Canvas element.
        </p>
      </div>
    },
    url: 'html-canvas-3d-engine',
    links: [
      {
        label: 'GitHub',
        url: 'https://youtube.com'
      }
    ]
  },
  {
    label: 'Pixel Perfect Canvas Panvas',
    content: () => {
      return <div>
        <p>
          An HTML Canvas element that can display vector and raster graphics in a "pixel perfect" fashion.
        </p>
      </div>
    },
    links: [
      {
        label: 'GitHub',
        url: 'https://youtube.com'
      }
    ]
  }
]

function Projects () {
  return <div id="projects" style={{height: /^\/projects/.test(window.location.pathname) ? '100vh' : 0}}>
    
    {/* Labels */}
    <div className="labels">
      {projects.map(project => {
        const path = `/projects/${nameToUrl(project.label)}`;
        const selected = window.location.pathname === path;

        return <Link to={path} className={'label-a' + (selected ? ' selected' : '')}><div className="label">
          <div className="label-text">{project.label}</div>
          <div className="corner"></div>
        </div></Link>
      })}
    </div>

    {/* Pages */}
    <div className="project-pages">
      {projects.map(project => {
        const path = `/projects/${nameToUrl(project.label)}`;
        const selected = window.location.pathname === path;

        return <div className={'project-page' + (selected ? ' selected' : '')}>
          <h1>{project.label}</h1>
          {project.content()}
          {project.links.map(link => {
            return <p>{link.label}: <a href={link.url}>LINK</a></p>
          })}
        </div>
      })}
    </div>
  </div>
};

export default Projects;