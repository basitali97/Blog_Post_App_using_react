import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export const Blog = ({ props, onDelete }) => {
    const navigate = useNavigate();
    const desc = useLocation().state.blog.desc;
    const blog = useLocation().state.blog;

    let initLike, likedBlog;
    if (localStorage.getItem("likes") === null) {
      initLike = [];
      likedBlog = 0;
    }
    else {
      initLike = JSON.parse(localStorage.getItem("likes"));
      likedBlog = 0;
      initLike.map((liked) => {
        if(blog.sno === liked.sno){
            likedBlog = liked.like;
        }
        return liked;
      })

    }
    let i = 0;
    const [LikedBlog, setLikedBlog] = useState(false)

    const likeBtn = () =>{
        if(LikedBlog === false){
            if(likes.length === 0){
                const myLike = {
                    sno : blog.sno,
                    like : 1
                }
                setLikes([...likes, myLike]);
                setLike(myLike.like)
            }
            else{
                i = 0;
                let f = 0;
                likes.map((liked) => {
                    if(blog.sno === liked.sno){
                        f = 1;
                        const myLike = {
                            sno : blog.sno,
                            like : liked.like + 1
                        }
                        likes[i] = myLike;
                        setLike(myLike.like)
                    }
                    i++;
                    return liked;
                })
                if(f === 0){
                    const myLike = {
                        sno : blog.sno,
                        like : 1
                    }
                    setLikes([...likes, myLike]);
                    setLike(myLike.like)
                }
            }
            setLikedBlog(true);
        }
        else{
            alert("Already Liked")
        }
    }
    const [like, setLike] = useState(likedBlog);
    const [likes, setLikes] = useState(initLike);

    localStorage.setItem('likes',JSON.stringify(likes)) 


    useEffect(() => {
      localStorage.setItem('like',JSON.stringify(like))
    }, [like])
    


    const back = () => {
        navigate('/');
    }

    return (
        <>
            <div className='container mt-3 p-2' id="BlogPost">
                <div className="row">
                    <div className="col-sm-1">
                        <button onClick={() => back()} className='btn btn-danger' style={{ float: 'left' }}>Back</button>
                    </div>
                    <div className="col-sm-5"></div>
                    <div className="col-sm-2"><button id='likeBtn' onClick={likeBtn} > <i class='fas fa-heart' style={{ color: 'red' }}></i> {like}</button></div>
                    <div className="col-sm-2">
                        <Link to={'/EditBlog'} state={{ blog: blog }}><button className='btn btn-danger' style={{ float: 'right' }} >Edit</button></Link>
                    </div>
                    <div className="col-sm-2">
                        <button className='btn btn-danger' style={{ float: 'right' }} onClick={() => onDelete(blog)}>Delete</button>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-12">
                        <h4>Title : {blog.title}</h4>
                        <h4>Category : {blog.categories}</h4>
                        <div className="content">{desc}</div>
                    </div>
                </div>
            </div>
        </>

    )
}
