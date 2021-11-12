import React from 'react';
import s from './Post.module.css';
import {PostsType} from "../MyPosts";

type PropsType = {
    posts: Array<PostsType>
}

function Post(props: PropsType) {
    return (
        <div className={s.item}>
            <img src={'https://klopik.com/uploads/posts/2019-11/1573389893_i-21.jpg'}/>
            {props.posts[0].message}
            <div>
                <span>{props.posts[0].likesCount}</span>
            </div>
        </div>
    )
}

export default Post;