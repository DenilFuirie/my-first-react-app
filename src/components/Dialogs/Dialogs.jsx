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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Daniel" id="1" />
                <DialogItem name="Vadim" id="2"  />
                <DialogItem name="Dmitry" id="3"  />
                <DialogItem name="Dimych" id="4"  />
            </div>
            <div className={s.messages}>
                <Message message="Yo!"/>
                <Message message="Hi!"/>
                <Message message="How are!"/>
                <Message message="You!"/>
            </div>
        </div>
    )
}

export default Dialogs;