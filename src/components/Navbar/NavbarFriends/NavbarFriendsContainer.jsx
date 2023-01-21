import React from "react";
import {connect} from "react-redux";
import NavbarFriends from "./NavbarFriends";

let mapStateToProps = (state) => {
    return{
        friends: state.navbarPage.friends
    }
}

const NavbarFriendsContainer = connect(mapStateToProps)(NavbarFriends)
export default NavbarFriendsContainer