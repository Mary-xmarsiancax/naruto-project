import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/posts-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }


    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts addPost={addPost} onPostChange={onPostChange}
                 newPostData={props.store.getState().profilePage.newPostData}
                 newPostText={props.store.getState().profilePage.newPostText} dispatch={props.dispatch}/>
    )
}
export default MyPostsContainer;