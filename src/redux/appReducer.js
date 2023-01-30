import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getMeThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESSED = 'INITIALIZED_SUCCESSED'

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESSED:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

export const setInitializingSuccess = () => ({type: INITIALIZED_SUCCESSED,})

export const initializeAppThunkCreator = () => (dispatch) => {
    let promise = dispatch(getMeThunkCreator())
    Promise.all([promise]).then( () => {
        dispatch(setInitializingSuccess())
    })
}

export default appReducer