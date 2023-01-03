import './App.css';
import React, { useState, useEffect , useContext} from 'react';
import Header from "./MyComponent/Header";
import { AddBlog } from "./MyComponent/AddBlog";
import { Blogs } from "./MyComponent/Blogs";
import { Blog } from "./MyComponent/Blog";
import {EditBlog} from "./MyComponent/EditBlog"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import NewBlogState from './Context/NewPostState';
import NewBlogContext from './Context/NewPostContext';

function Root() {
  const NewPost = useContext(NewBlogContext);
  const navigate = useNavigate();
  let initBlog;
  if (localStorage.getItem("blogs") === null) {
    initBlog = [];
  }
  else {
    initBlog = JSON.parse(localStorage.getItem("blogs"));
  }
  const onDelete = (blog) => {
    setBlogs(blogs.filter((e) => {
      return e !== blog;
    }))
    localStorage.setItem("blogs", JSON.stringify(blogs));
    navigate('/');
  }

  const editBlog = (sno,title,categories,desc) => {
    const myBlog = {
      sno: sno,
      title: title,
      categories: categories,
      desc: desc
    }

    blogs.map((blog => {
      if(blog.sno === sno){
        blogs[sno] = myBlog;
      }
    }))
    navigate('/');
  }

  const addBlog = (title, categories, desc) => {
    let sno;
    if (blogs.length === 0) {
      sno = 0;
    }
    else {
      sno = blogs[blogs.length - 1].sno + 1;
    }
    const myBlog = {
      sno: sno,
      title: title,
      categories: categories,
      desc: desc
    }
    setBlogs([...blogs, myBlog]);
  }

  const [blogs, setBlogs] = useState(initBlog);
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs])

  return (
    <>
      <Header NewPost={NewPost.NewPost} />
      <Routes>
        <Route path="/" element={<Header NewPost={NewPost.NewPost}/>} />
        <Route path="/AddBlog" element={<AddBlog addBlog={addBlog} NewPost={NewPost.NewPost} />} />
        <Route path="/Blog" element={<Blog onDelete={onDelete} NewPost={NewPost.NewPost}/>} />
        <Route index element={<Blogs blogs={blogs} onDelete={onDelete} NewPost={NewPost.NewPost}/>} />
        <Route path='/EditBlog' element={<EditBlog editBlog={editBlog} NewPost={NewPost.NewPost}/>} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <NewBlogState>
      <Router>
        <Root />
      </Router>
    </NewBlogState>
  );
}

