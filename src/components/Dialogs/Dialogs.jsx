import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsItems = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                     img={dialog.img}/>);
    let messages = props.dialogsPage.messages.map(message => <Message message={message.message} me={message.me}/>);

    let newMessageText = React.createRef();

    let clickSendMessage = () => {
        props.sendMessage();
    }

    let changeMessageText = () => {
        let messageText = newMessageText.current.value;
        props.updateMessageText(messageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                <div>
                    {messages}
                </div>
                <div className={s.newMessage}>
                    <div>
                        <img src='https://html5css.ru/w3css/img_avatar3.png' alt="none"/>
                    </div>
                    <div>
                        <textarea ref={newMessageText}
                                  onChange={changeMessageText}
                                  placeholder="Введите текст"
                                  value={props.dialogsPage.newMessageText}/>
                        <div>
                            <button onClick={clickSendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;