import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} /> );
    let messagesElement = state.messages.map((m) => <Message message={m.message} id={m.id}/>)
    let newMessageBody  = state.newMessageBody


    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <textarea value={newMessageBody} placeholder='Enter you message'
                              onChange={onNewMessageChange}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;