import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let myPostsElements = props.postData.map
    (p => <Post key={p.id} message={p.message} likesCounte={p.likesCounte}/>);

    return (
        <div className={s.myPostsFromHeader}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea>New Post</textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
                <div className={s.posts}>
                    New Post
                    {myPostsElements}
                </div>
            </div>
        </div>)
}
export default MyPosts;