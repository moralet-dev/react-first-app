import React from "react";

import {newMessageTextCreator, sendMessageCreator} from "../../NotRedux/store";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage
    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onTextChange = (text) =>{
        let action = newMessageTextCreator(text)
        props.store.dispatch(action)
    }

    return (
        <Dialogs dialogs={state.dialogs}
                          messages={state.messages}
                          newMessageText={state.newMessageText}
                          sendMessage={sendMessage}
                          onTextChange={onTextChange}
        />
    )
}

export default DialogsContainer