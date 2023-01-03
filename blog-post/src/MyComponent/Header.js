import React from 'react';
import { Link } from "react-router-dom";


export default function Header(props) {
    return (
        <nav class="navbar p-3" id='header'>
            <Link  to="/" style={{textDecoration:'none', color: 'black'}}><h4>Blog Post App</h4></Link>
            {props.NewPost ?<Link to='/AddBlog'><button type='button' className='btn btn-primary'>New Post</button></Link>:""}
        </nav>
    ) 
}
