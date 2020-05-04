import React from 'react';
import s from "../Dialogs.module.css";

const Message = (props) => {
    let tmpMessage = (props.me)
        ? <div className={s.myMessage + " " +s.message}>
            <div className={s.avatar}><img src='https://html5css.ru/w3css/img_avatar3.png' alt="none"/></div>
            <div className={s.myText}>{props.message}</div>
        </div>
        : <div className={s.otherMessage + " " +s.message}>
            <div className={s.otherText}>{props.message}</div>
            <div className={s.avatar}><img src='https://html5css.ru/w3images/avatar6.png' alt="none"/></div>
        </div>;
    return (
        tmpMessage
    )
}

export default Message;