const SEND_MESSAGE_TO_USER = 'SEND-MESSAGE-TO-USER'
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {name: 'Jack', id: '1',},
        {name: 'Bill', id: '2',},
        {name: 'Ashley', id: '3',},
        {name: 'Di', id: '4',},
        {name: 'Valery', id: '5',},
        {name: 'Andrew', id: '6',}
    ],
    messages: [
        {msg: 'Hi!'},
        {msg: 'How are you?!'},
        {msg: 'Keep calm!'},
        {msg: 'And learn React!'},
    ],
    newMessageText: 'Type your message',
}
const dialogsReducer = (state = initialState, action) => {
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
        default:
            return state

    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE_TO_USER})
export const newMessageTextCreator = (val) => ({type: NEW_MESSAGE_TEXT, newText: val,})

export default dialogsReducer