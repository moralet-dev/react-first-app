import React from "react"

import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunkCreator, getUserProfileThunkCreator, setUserProfile, updateStatusThunkCreator} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (userId) {
            this.props.getUserProfileThunkCreator(userId)
            this.props.getStatus(userId)
        } else {
            this.props.getUserProfileThunkCreator(27632)
            this.props.getStatus(27632)
        }
    }

    render() {
        return (<Profile {...this.props}/>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
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

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfileThunkCreator, getStatus: getStatusThunkCreator, updateStatus: updateStatusThunkCreator}),
    withRouter,
)(ProfileContainer)
