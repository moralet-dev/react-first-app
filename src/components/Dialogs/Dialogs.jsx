import React from "react";

import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    return (<div className={s.dialogs}>
        <div className={s.dialogs_items}>
            {props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)}
        </div>
        <div className={s.messages}>
            {props.state.messages.map((m) => <Message msg={m.msg}/>)}
        </div>
    </div>)
}

export default Dialogs