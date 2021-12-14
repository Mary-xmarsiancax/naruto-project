import React, {useState} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, Form, Formik} from "formik";
import {validatePost} from "../../../common/validate/validate";


const MyPosts = (props) => {
    const [selectedId, setSelectedId] = useState(undefined)
    console.log(selectedId);
    let myPostsElements = props.newPostData.map
    (p => <div  className={selectedId===p.id?s.selectedPostStyle:""} onClick={() => {

            onSelectedPost(p.id)
        }}>
            <Post key={p.id} message={p.message} likesCounte={p.likesCounte}/>
        </div>
    );

    const onSelectedPost = (postId) => {
        console.log(postId);
        setSelectedId(postId)
        console.log(postId);
    }

    const onSubmitPost = (formData) => {
        props.addPost(formData);
    }

    const onDeletePost = (selectedId=1) => {
        console.log(selectedId);//undefined
        props.deletePost(selectedId)
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
                    {({errors, touched, isValidating}) => (
                        <Form>
                            {props.isOwner &&
                            <div>
                                <Field id="post" name="post"  placeholder="add post"/>
                                {errors.post && touched.post && <div className={s.divError}>{errors.post}</div>}
                                <button type="submit">Add post</button>
                            </div>}
                        </Form>
                    )}
                </Formik>
                {props.isOwner &&
                <button onClick={() => onDeletePost()}>Delete post</button>}
                <div className={s.posts}>
                    New Post
                    {myPostsElements}
                </div>
            </div>
        </div>)
}
export default MyPosts;