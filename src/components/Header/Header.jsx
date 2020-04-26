import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://cdn.dribbble.com/users/245153/screenshots/3684097/fordrib.gif' alt="none"/>
        </header>
    );
}

export default Header;