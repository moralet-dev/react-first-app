import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthenticated: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuthenticated) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuthenticated}
})

export const getMeThunkCreator = () => (dispatch) => {

    return authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        }
    )
}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getMeThunkCreator())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}

export const logoutThunkCreator = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}
export default authReducer