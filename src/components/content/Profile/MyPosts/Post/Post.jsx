import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://sobesednik.ru/storage/posts/December2020/hlehg124br083Tzf7wSb.jpg"
                 alt="avaNaruto"/>
            {props.message}
            <div>
                    <span>
                        like {props.likesCounte}
                    </span>
            </div>
        </div>
    )

}
export default Post;