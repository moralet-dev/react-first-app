const ADD_NEW_POST = 'ADD-NEW-POST';
const NEW_POST_TEXT = 'NEW-POST-MESSAGE';
const SEND_MESSAGE_TO_USER = 'SEND-MESSAGE-TO-USER'
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'


const store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: '1', msg: 'Hi!', likesCount: '2'},
                {id: '1', msg: 'Hello!', likesCount: '22'},
                {id: '1', msg: 'How are you?', likesCount: '68'},
            ],
            newPostText: 'Some new text',
        },
        navbarPage: {
            friends: [
                {name: 'Jack'},
                {name: 'Di'},
                {name: 'Ashley'},
                {name: 'Bill'},
            ]
        }

    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    _newPostMessage(val) {
        this._state.profilePage.newPostText = val
        this._callSubscriber(this._state)
    },
    _addPost() {
        let newPost = {
            id: '5', msg: this._state.profilePage.newPostText, likesCount: '0',
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _newMessageText(val) {
        this._state.dialogsPage.newMessageText = val
        this._callSubscriber(this._state)
    },
    _sendMessageToUser() {
        this._state.dialogsPage.messages.push({msg: this._state.dialogsPage.newMessageText})
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_NEW_POST: {
                this._addPost()
                break
            }
            case NEW_POST_TEXT: {
                this._newPostMessage(action.newText)
                break
            }
            case SEND_MESSAGE_TO_USER: {
                this._sendMessageToUser()
                break
            }
            case NEW_MESSAGE_TEXT: {
                this._newMessageText(action.newText)
                break
            }
            default:
                console.log('error')
        }
    },

}

export const addPostCreator = () => ({type: ADD_NEW_POST})
export const newPostTextCreator = (val) => ({type: NEW_POST_TEXT, newText: val,})
export const sendMessageCreator = () => ({type: SEND_MESSAGE_TO_USER})
export const newMessageTextCreator = (val) => ({type: NEW_MESSAGE_TEXT, newText: val,})

export default store
window.store = store