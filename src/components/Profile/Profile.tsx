import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src={'http://cdn.simplesite.com/i/5a/74/285697109462381658/i285697114384413204._szw1280h1280_.jpg'}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;