const SEND_MESSAGE = 'SEND-MESSAGE-TO-USER'
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
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {msg: action.newText}],
            }
        }
        default:
            return state

    }

}

export const sendMessageCreator = (newText) => ({type: SEND_MESSAGE, newText: newText})

export default dialogsReducer