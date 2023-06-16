import React, { useState } from "react";
import DisplayBlog from "./DisplayBlog";

const Blog = () => {
    const [post, setpost] = useState('');
    const [submitPost, setSubmitPost] = useState([]);
    const [submitTitle, setSubmitTitle] = useState([]);
    const [title, setTitle] = useState("");
    //////////////////////////////////////////////
    console.log("post", post)
    const postFun = (e) => {
        setpost(e.target.value);
         
    }

    ///////////////////////////////////////////////////////
    const submitBlog = () => {
        
        setSubmitPost([...submitPost, post]);
        setSubmitTitle([...submitTitle, title]);
        // setSubmitPost([ post]);
        // setSubmitTitle( [title]);
        setpost('');
        setTitle('');
        
   }
    // console.log("submitBlog",submit);
    // console.log("submitTitle",submitTitle);
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
                {submitTitle.map((index) =>(
                    <DisplayBlog
                        key={index}
                        submitTitle={submitTitle}
                        submitPost={submitPost}
                         />
                ))}

            </div>
            {/* </form> */}
        </>
    );
}
export default Blog;