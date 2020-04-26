import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img src='https://www.w3schools.com/howto/img_snow_wide.jpg' alt="none"/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;