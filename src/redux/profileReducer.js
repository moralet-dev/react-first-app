import {profileAPI, profileAPI as userAPI} from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const NEW_POST_TEXT = 'NEW-POST-MESSAGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: '1', msg: 'Hi!', likesCount: '2'},
        {id: '1', msg: 'Hello!', likesCount: '22'},
        {id: '1', msg: 'How are you?', likesCount: '68'},
    ],
    newPostText: 'Some new text',
    profile: null,
    status: '',
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: {...action.profile, photos: {...action.profile.photos}}
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_NEW_POST})
export const newPostTextCreator = (val) => ({type: NEW_POST_TEXT, newText: val,})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const setStatus = (status) => ({type:SET_STATUS, status: status})


export const getUserProfileThunkCreator = (id) => (dispatch) => {
    userAPI.getUserProfile(id).then(response => {
            dispatch(setUserProfile(response.data))
        }
    )
}
export const getStatusThunkCreator = (id) => (dispatch) => {
    profileAPI.getUserStatus(id).then(response=>{
        dispatch(setStatus(response.data))
    })
}
export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response=>{
        if (response.data.resultCode === 0){
            dispatch(setStatus(status))
        }
    })
}

export default profileReducer