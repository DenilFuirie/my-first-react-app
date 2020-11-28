import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {



    let dialogElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} /> );
    let messagesElement = props.state.messages.map((m) => <Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef()

    let addNewMessage = () => {
        let text1 = newMessageElement.current.value
        alert(text1)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElement}

            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addNewMessage}>Отправить сообщение</button>
            </div>
        </div>
    )
}

export default Dialogs;