import React from "react";
import NewBlogContext from "./NewPostContext";

const NewBlogState = (props)=>{
    const loc = {
        "loc" : window.location.pathname
    }
    let NewPost;
    let loca = window.location.pathname;
    if(loca !== '/'){
        NewPost = false;
    }
    else{
        NewPost = true;
    }

    return (
        <NewBlogContext.Provider value={{NewPost, loc}}>
            {props.children}
        </NewBlogContext.Provider>
    )
}

export default NewBlogState;