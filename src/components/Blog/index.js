import React from 'react';
import './blog.scss';

const blogs = [
  {
    title: 'How I learnt to stop worrying about bees'
  }
]

function BlogSidebarItem ({title}) {
  return <div className="blog-sidebar-item">
    <h1>{title}</h1>
  </div>
}

function BlogItem ({blog}) {
  return <div className="blog-item">
    <h1>{blog.title.toUpperCase()}</h1>
    <p>Date</p>
    <p>Contents contents blah blah</p>
    <p>Contents contents blah blah</p>
    <p>Contents contents blah blah</p>
    <p>Contents contents blah blah</p>
    <div className="inner-border"/>
  </div>
}

function Blog () {
  return <div id="blog" style={{height: /^\/blog/.test(window.location.pathname) ? '100vh' : 0}}>
    <div id="blog-sidebar">
      <BlogSidebarItem title="blog item 1" />
      <BlogSidebarItem title="blog item 2" />
      <BlogSidebarItem title="blog item 3" />
    </div>
    <div id="blog-content">
      {
        blogs.map(blog => {
          return <BlogItem blog={blog}/>
        })
      }
    </div>
    <div className="blog-bg" id="blog-bg-1"></div>
    <div className="blog-bg" id="blog-bg-2"></div>
  </div>
};

export default Blog;