import React from "react";

import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {newMessageTextCreator, sendMessageCreator} from "../../NotRedux/state";


const Dialogs = (props) => {
    let textMessage = React.createRef()
    let sendMessage = () => {
        props.dispatch(sendMessageCreator())
    }
    let onTextChange = () =>{
        let newText = textMessage.current.value
        props.dispatch(newMessageTextCreator(newText))
    }

    return (<div className={s.dialogs}>
        <div className={s.dialogs_items}>
            {props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)}
        </div>
        <div className={s.messages}>
            {props.state.messages.map((m) => <Message msg={m.msg}/>)}
            <div className={s.send_message}>
                <textarea ref={textMessage} onChange={onTextChange} cols="30" rows="1" value={props.state.newMessageText}></textarea>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    </div>)
}

export default Dialogs