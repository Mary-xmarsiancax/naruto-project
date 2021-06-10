import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
            <div className={s.item}>
                <img src="https://sobesednik.ru/storage/posts/December2020/hlehg124br083Tzf7wSb.jpg"
                     alt="avaNaruto"/>
                post 1
                <div>
                    <span>
                        like
                    </span>
                </div>
            </div>
    )

    }
export default Post;