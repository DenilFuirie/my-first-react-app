import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Daniel'},
        {id: 2, name: 'Vadim'},
        {id: 3, name: 'Dmitry'},
        {id: 4, name: 'Dimych'},
    ]

    let messages = [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Hello'},
        ]

    let dialogElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} /> );
    let messagesElement = messages.map((m) => <Message message={m.message} id={m.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;