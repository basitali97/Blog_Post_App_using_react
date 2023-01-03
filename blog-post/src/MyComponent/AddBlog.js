import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import NewBlogContext from '../Context/NewPostContext';


export const AddBlog = (props) => { 
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [content, setContent] = useState("");
  const cancelAddBlog = (e) =>{
    navigate('/');
  }


  const submit = (e) =>{
    e.preventDefault();
    if(!title || !categories || !content){
      alert("Title, Categories or Context cannot be black");
    }
    else{
      props.addBlog(title,categories,content);
      navigate('/');
    }
  }

  const a = useContext(NewBlogContext);
  console.log(a.NewPost, a.loc);

  return (
    <>
      <div className='container my-3'>
        <h3>Add Blog</h3><hr/>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Enter Title" />
          </div>
          <div className="form-group">
            <label htmlFor="categories">Categories</label>
            <input type="text" value={categories} onChange={(e)=>{setCategories(e.target.value)}} className="form-control" id="categories" placeholder="Enter Categories" />
          </div>
          <div className="form-group">
            <label htmlFor="categories">Content</label>
            <textarea type="textbox" value={content} onChange={(e)=>{setContent(e.target.value)}} className="form-control" id="context" ></textarea>
          </div>
          <button type="submit" className="btn btn-primary m-2">Add Blog</button>
          <button onClick={()=>cancelAddBlog()} className="btn btn-primary my-2">Cancel</button>
        </form>
      </div>
    </>
  )
}
