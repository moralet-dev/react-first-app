import React from "react";

import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    return (<div className={`${s.dialog} ${s.active}`}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}

const Message = (props) => {
    return (<div className={s.message}>{props.msg}</div>)
}
const Dialogs = () => {

    let dialogs = [
        {name: 'Jack', id: '1',},
        {name: 'Bill', id: '2',},
        {name: 'Ashley', id: '3',},
        {name: 'Di', id: '4',},
        {name: 'Valery', id: '5',},
        {name: 'Andrew', id: '6',}
    ]

    let messages = [
        {msg: 'Hi!'},
        {msg: 'How are you?!'},
        {msg: 'Keep calm!'},
        {msg: 'And learn React!'},
    ]
    let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map((m) => <Message msg={m.msg}/>)

    return (<div className={s.dialogs}>
        <div className={s.dialogs_items}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
    </div>)
}

export default Dialogs