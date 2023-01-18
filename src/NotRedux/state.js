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
    newPostMessage(val) {
        this._state.profilePage.newPostText = val
        this._callSubscriber(this._state)
    },
    addPost() {
        let newPost = {
            id: '5', msg: this._state.profilePage.newPostText, likesCount: '0',
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store
window.store = store