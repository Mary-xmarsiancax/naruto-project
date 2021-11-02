import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, Form, Formik} from "formik";


const MyPosts = (props) => {
    let myPostsElements = props.newPostData.map
    (p => <Post key={p.id} message={p.message} likesCounte={p.likesCounte}/>);

    const onSubmitPost = (formData) => {
        props.addPost(formData);
    }

    return (
        <div className={s.myPostsFromHeader}>
            <h2>My Posts</h2>
            <div>
                <Formik
                    initialValues={{
                        post: ""
                    }}
                    onSubmit={onSubmitPost}
                >
                    <Form>
                        <div>
                            <Field id="post" name="post" placeholder="add post"/>
                            <button type="submit">Add post</button>
                        </div>
                    </Form>
                </Formik>
                {/*<div>*/}
                {/*    <textarea onChange={onPostChange} value={props.newPostText}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button onClick={addPost}>Add Post</button>*/}
                {/*</div>*/}
                <div className={s.posts}>
                    New Post
                    {myPostsElements}
                </div>
            </div>
        </div>)
}
export default MyPosts;