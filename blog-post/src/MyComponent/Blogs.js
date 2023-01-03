import React from 'react';
import { Link } from 'react-router-dom';
export const Blogs = (props) => {
  return (
    <div className='container mt-3'>
      <div className='text-center'><h3>Blogs List</h3></div><hr />
      <div className='BlogList'>
          {props.blogs.length === 0 ? "No Blog Post Available" :
          props.blogs.map((blog) => {
            return (
              <>
                <Link to={'/blog'} key={blog.sno} state={{blog : blog}} style={{ textDecoration: 'none' }}><h5>{blog.title}</h5></Link>
                <hr/>
              </>
            )
          })}
      </div>
    </div>
  )
}
