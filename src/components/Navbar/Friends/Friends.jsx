import React from 'react';
import s from './Friends.module.css'

const Friends = (props) => {

    let friends = props.friends.map(friend =>
        <div className={s.friend}>
            <div>
                <img src={friend.avatar} alt='none'/>
            </div>
            <div>
                {friend.name}
            </div>
        </div>)

    return (
        <div>
            <div className={s.title}>
                Friends
            </div>
            <div className={s.friends}>
                {friends}
            </div>
        </div>
    );
}

export default Friends;