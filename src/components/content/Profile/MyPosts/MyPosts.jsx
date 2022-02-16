import React, {useState} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, Form, Formik} from "formik";


const MyPosts = (props) => {
    const [selectedId, setSelectedId] = useState(undefined)
    let myPostsElements = props.newPostData.map
    (p => <div key={p.id} className={props.isOwner && selectedId === p.id ? s.selectedPostStyle : ""} onClick={() => {

            onSelectedPost(p.id)
        }}>
            <Post message={p.message} likesCount={p.likesCount}/>
        </div>
    );

    const onSelectedPost = (postId) => {
        setSelectedId(postId)
    }

    const onSubmitPost = (formData, helper) => {
        helper.resetForm();
        props.addPost(formData);
    }

    const onDeletePost = (postId) => {
        props.deletePost(postId)
    }

    return (
        <div className={s.myPostsFromHeader}>
            <h2>My Posts</h2>
            <div>
                <Formik
                    initialValues={{
                        post: " "
                    }}
                    onSubmit={onSubmitPost}
                >
                    {({errors, touched, isValidating}) => (
                        <Form>
                            {props.isOwner &&
                            <div>
                                <Field id="post" name="post" placeholder="add post"/>
                                {errors.post && touched.post && <div className={s.divError}>{errors.post}</div>}
                                <button type="submit">Add post</button>
                            </div>}
                        </Form>
                    )}
                </Formik>
                {props.isOwner &&
                <button onClick={() => onDeletePost(selectedId)}>Delete post</button>}
                <div className={s.posts}>
                    New Post
                    {myPostsElements}
                </div>
            </div>
        </div>)
}
export default MyPosts;