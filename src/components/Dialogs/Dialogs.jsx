import React from "react";

import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsContorls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

let maxLength50 = maxLengthCreator(50)

const SendMessageForm = (props) => {

    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div className="">
                <Field component={Textarea} validate={[required, maxLength50]} name={'newMessageText'} placeholder={'Enter your message'}/>
            </div>
            <button>Send Message</button>
        </form>
    )
}

const SendMessageReduxForm = reduxForm({form: 'sendMessage'})(SendMessageForm)

const Dialogs = (props) => {
    const sendNewMessage = (formData) => {
        props.sendMessage(formData.newMessageText)
    }
    return (<div className={s.dialogs}>
        <div className={s.dialogs_items}>
            {props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)}
        </div>
        <div className={s.messages}>
            {props.messages.map((m) => <Message msg={m.msg}/>)}
            <div className={s.send_message}>
                <SendMessageReduxForm onSubmit={sendNewMessage}/>
            </div>
        </div>
    </div>)
}

export default Dialogs