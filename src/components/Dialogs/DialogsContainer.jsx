import React from "react";

import {newMessageTextCreator, sendMessageCreator} from "../../NotRedux/store";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = () => {


    return (<StoreContext.Consumer>{(store) => {
            let state = store.getState().dialogsPage
            let sendMessage = () => {
                store.dispatch(sendMessageCreator())
            }
            let onTextChange = (text) => {
                let action = newMessageTextCreator(text)
                store.dispatch(action)
            }
            return (<Dialogs dialogs={state.dialogs}
                             messages={state.messages}
                             newMessageText={state.newMessageText}
                             sendMessage={sendMessage}
                             onTextChange={onTextChange}
            />)
        }}

        </StoreContext.Consumer>

    )
}

export default DialogsContainer