import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
    let myPostsElements = props.postData.map
    (p => <Post key={p.id} message={p.message} likesCounte={p.likesCounte}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.addPost();
        // props.updateNewPostText("");
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.myPostsFromHeader}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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