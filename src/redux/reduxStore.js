import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "../NotRedux/profileReducer";
import dialogsReducer from "../NotRedux/dialogsReducer";
import navbarReducer from "../NotRedux/navbarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
})

let store = createStore(reducers);

export default store