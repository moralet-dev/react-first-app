import profileReducer from "../redux/profileReducer";
import dialogsReducer from "../redux/dialogsReducer";

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
    dispatch(action) {
        this._state.profilePage =  profileReducer(this._state.profilePage, action)
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    },

}


// export default store
window.store = store