const ADD_NEW_POST = 'ADD-NEW-POST';
const NEW_POST_TEXT = 'NEW-POST-MESSAGE';

let initialState = {
    posts: [
        {id: '1', msg: 'Hi!', likesCount: '2'},
        {id: '1', msg: 'Hello!', likesCount: '22'},
        {id: '1', msg: 'How are you?', likesCount: '68'},
    ],
    newPostText: 'Some new text',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {id: '5', msg: state.newPostText, likesCount: '0',}
            state.newPostText = ''
            state.posts.push(newPost)
            return state
        }
        case NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        }
        default:
            return state
    }
}

export default profileReducer