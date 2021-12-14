import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, Form, Formik} from "formik";
import {validatePost} from "../../../common/validate/validate";



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
                    {({ errors, touched, isValidating }) => (
                    <Form>
                        <div>
                            <Field id="post" name="post" validate={validatePost} placeholder="add post"/>
                            {errors.post && touched.post && <div className={s.divError}>{errors.post}</div>}
                            {props.isOwner &&
                            <button type="submit">Add post</button>}
                            {props.isOwner &&
                                <button type="submit">Delete post</button>}
                        </div>
                    </Form>
                    )}
                </Formik>
                <div className={s.posts}>
                    New Post
                    {myPostsElements}
                </div>
            </div>
        </div>)
}
export default MyPosts;