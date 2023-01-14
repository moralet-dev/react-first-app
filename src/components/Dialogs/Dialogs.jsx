import React from "react";

import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
  return (
      <div className={s.message}>{props.msg}</div>
  )
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name='Jack' id='1'/>
                <DialogItem name='Bill' id='2'/>
                <DialogItem name='Ashley' id='3'/>
                <DialogItem name='Di' id='4'/>
                <DialogItem name='Valery' id='5'/>
                <DialogItem name='Andrew' id='6'/>
            </div>
            <div className={s.messages}>
                <Message msg='Hi!'/>
                <Message msg='How are you?'/>
            </div>
        </div>)
}

export default Dialogs