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
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, {id: '5', msg: state.newPostText, likesCount: '0',}],
                newPostText: '',
            }
        case NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_NEW_POST})
export const newPostTextCreator = (val) => ({type: NEW_POST_TEXT, newText: val,})
export default profileReducer