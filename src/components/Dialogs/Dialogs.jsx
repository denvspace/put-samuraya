import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let dialogs = [
    {id: 1, name: 'Miha'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Cat'},
    {id: 4, name: 'Dog'},
    {id: 5, name: 'Bird'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
]

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogsUsers = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
let messagesItem = messages.map(message => <Message message={message.message}/>);


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsUsers}
            </div>
            <div className={s.messages}>
                {messagesItem}
            </div>
        </div>
    );
}

export default Dialogs;