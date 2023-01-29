import React from "react";
import Login from "./Login";
import {connect} from "react-redux";


class LoginContainer extends React.Component{
    render() {
        return <Login {...this.props}/>
    }
}

let mapStateToProps = (state)=>({
    a:1,
})

export default connect(mapStateToProps, {})(LoginContainer)