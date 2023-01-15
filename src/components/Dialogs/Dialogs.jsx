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
const Dialogs = (props) => {

    let dialogsData = [
        {
            name: 'Jack',
            id: '1',
            messages: {
                msg: 'Hi!'
            },
        },
        {
            name: 'Bill',
            id: '2',
            messages: {
                msg: 'Hi!'
            },
        },
        {name: 'Ashley', id: '3',},
        {name: 'Di', id: '4',},
        {name: 'Valery', id: '5',},
        {name: 'Andrew', id: '6',}
    ]
    return (<div className={s.dialogs}>
        <div className={s.dialogs_items}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
        </div>
        <div className={s.messages}>
            <Message msg={dialogsData[0]['messages'].msg}/>
            <Message msg='How are you?'/>
        </div>
    </div>)
}

export default Dialogs