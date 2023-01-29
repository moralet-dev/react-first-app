import {authAPI} from "../api/api";

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

export const setAuthUserData = (userId, email, login, isAuthenticated) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuthenticated}})

export const getMeThunkCreator = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            }
        )
    }
}
export const loginThunkCreator = (email, password, rememberMe) => (dispatch) =>{
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getMeThunkCreator())
        }
    })
}

export const logoutThunkCreator = () => (dispatch) =>{
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}
export default authReducer