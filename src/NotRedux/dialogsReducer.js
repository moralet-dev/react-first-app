const SEND_MESSAGE_TO_USER = 'SEND-MESSAGE-TO-USER'
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE_TO_USER: {
            state.messages.push({msg: state.newMessageText})
            state.newMessageText = ''
            return state
        }
        case NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText
            return state
        }
        default: return state

    }

}

export default dialogsReducer