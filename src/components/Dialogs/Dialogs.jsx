import React from "react";

import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let textMessage = React.createRef()
    let onTextChange = () =>{
        let text = textMessage.current.value
        props.onTextChange(text)
    }

    return (<div className={s.dialogs}>
        <div className={s.dialogs_items}>
            {props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)}
        </div>
        <div className={s.messages}>
            {props.messages.map((m) => <Message msg={m.msg}/>)}
            <div className={s.send_message}>
                <textarea ref={textMessage} onChange={onTextChange} cols="30" rows="1" value={props.newMessageText}></textarea>
                <button onClick={props.sendMessage}>Send Message</button>
            </div>
        </div>
    </div>)
}

export default Dialogs