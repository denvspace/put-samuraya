import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src='https://html5css.ru/w3css/img_avatar3.png' alt="none"/>
            </div>
            <div className={s.post}>
                {props.message}
                <div className={s.likes}>
                    <span>likes {props.likesCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;