import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
function MyPosts() {
    const post1:Array <PostsType> = [
        {id: 1, message: 'Hi! How are you?', likesCount: 2},
    ]
    const post2: Array<PostsType> = [
        {id: 1, message: 'Hey! It is my first post!', likesCount: 23}
    ]
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>

            </div>
            <div className={s.post}>
                <Post posts={post1} />
                <Post posts={post2} />
            </div>
        </div>
    )
}

export default MyPosts;