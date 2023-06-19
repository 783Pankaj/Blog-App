import React, { useState } from "react";
import DisplayBlog from "./DisplayBlog";

const Blog = () => {

    const [title, setTitle] = useState("");
    const [post, setpost] = useState('');
    const [submitPost, setSubmitPost] = useState([]);
    // const [submitTitle, setSubmitTitle] = useState([]);
    //////////////////////////////////////////////
    const postFun = (e) => {
        setpost(e.target.value);

    }

    ///////////////////////////////////////////////////////
    const submitBlog = () => {
        setSubmitPost([...submitPost, title, post]);
        // setSubmitTitle([...submitTitle, title]) ;
        // setpost('');
        // setTitle('');

    }

    console.log("submitPost",submitPost);
    ///////////////////////////////////////////////////////    

    const titleFun = (e) => {
        setTitle(e.target.value);
    }
    //////////////////////////////////////////
    const clerFun = () => {
        setpost('');
        setTitle('');
    }

    return (
        <>
            {/* <form onSubmit={this.submitBlog} > */}
            <div>
                <input type="text"
                    placeholder="Enter here your Blog Title"
                    value={title}
                    onChange={titleFun}

                /><br /><br />
                <textarea placeholder="Enter Here Your Blog"
                    className="textarea"
                    // name="story"
                    rows="20"
                    cols="60"
                    value={post}
                    onChange={postFun}
                /><br /><br />
                <button type="submit" onClick={submitBlog} >Post</button>
                <button onClick={clerFun}>Clear</button>
            </div>

            <div>
                
                {submitPost.map((i) => (
                    // return(
                    <DisplayBlog
                        key={i}
                        index={i}
                        title={title}
                        post={post}
                    />
                     )
                )}
                
            </div>
        </>
    );
}
export default Blog;