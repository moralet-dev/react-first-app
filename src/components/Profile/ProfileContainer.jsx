import React from "react"

import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, setUserProfile} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (userId) {
            this.props.getUserProfileThunkCreator(userId)
        }
    }

    componentWillUnmount() {
        this.props.setUserProfile({})
    }

    render() {
        return (<Profile {...this.props}/>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return <Component{...props} router={{location, navigate, params}}/>
    }

    return ComponentWithRouterProp
}


export default connect(mapStateToProps, {setUserProfile, getUserProfileThunkCreator})(withRouter(ProfileContainer));