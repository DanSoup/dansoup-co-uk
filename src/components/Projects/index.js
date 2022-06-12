import React from 'react';
import './projects.scss';
import {Link} from 'react-router-dom';
import { nameToUrl } from '../common';

const projects = [
  {
    label: 'Simple AWS HTML Host',
    content: () => {
      return <div>
        <p>
          A really simple boilerplate for HTML apps I want to host using my AWS hosting solution.
        </p>
      </div>
    },
    status: 'complete',
    url: 'simple-aws-html-host',
    links: [
      {
        label: 'Example',
        url: 'https://dansoup.co.uk/apps/simple-aws-html-host'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/DanSoup/simple-aws-html-host.git'
      }
    ]
  },
  {
    label: 'Pixel Perfect Canvas Panvas',
    status: 'in progress',
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
        url: 'https://github.com/DanSoup/panvas'
      }
    ]
  },
  {
    label: 'HTML Canvas 3D Engine',
    hidden: true,
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
]

function Projects () {
  return <div id="projects" style={{height: /^\/projects/.test(window.location.pathname) ? '100vh' : 0}}>
    
    {/* Labels */}
    <div className="labels">
      {projects.map(project => {
        if (project.hidden) return false;

        const path = `/projects/${nameToUrl(project.label)}`;
        const selected = window.location.pathname === path;

        return <Link key={project.label} to={path} className={'label-a' + (selected ? ' selected' : '')}><div className="label">
          <div className="label-text">{project.label}</div>
          <div className="corner"></div>
        </div></Link>
      })}
    </div>

    {/* Pages */}
    <div className="project-pages">
      {projects.map(project => {
        if (project.hidden) return false;

        const path = `/projects/${nameToUrl(project.label)}`;
        const selected = window.location.pathname === path;

        return <div key={project.label} className={'project-page' + (selected ? ' selected' : '')}>
          <h1>{project.label}</h1>
          {project.status && <p>Status: <b className={`status ${project.status.replace(/ /g,'-')}`}>{project.status.toUpperCase()}</b></p>}
          {project.content()}
          {project.links.map(link => {
            return <p key={link.label}>{link.label}: <a href={link.url} target="_blank">LINK</a></p>
          })}
        </div>
      })}
    </div>

    <div className="shadow">

    </div>
  </div>
};

export default Projects;