import React from "react"
import Header from "./Header";
import {connect} from "react-redux";
import {getMeThunkCreator, logoutThunkCreator} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getMeThunkCreator()
    }

    render() {return <Header {...this.props}/>}
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getMeThunkCreator, logoutThunkCreator})(HeaderContainer)