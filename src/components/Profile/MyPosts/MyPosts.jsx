import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let postData = [
    {id: 1, message: "Hi, how are you?", likesCount: "5"},
    {id: 2, message: "Hey, go to football!", likesCount: "17"},
    {id: 3, message: "Bay-bay", likesCount: "1"}
]

let posts = postData.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder="Введите текст" cols="100" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;