import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
    let myPostsElements = props.newPostData.map
    (p => <Post key={p.id} message={p.message} likesCounte={p.likesCounte}/>);


    let addPost = () => {
        props.addPost();
    }


    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
    }

    return (
        <div className={s.myPostsFromHeader}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
                <div className={s.posts}>
                    New Post
                    {myPostsElements}
                </div>
            </div>
        </div>)
}
export default MyPosts;