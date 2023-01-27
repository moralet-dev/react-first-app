import React from "react";
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }
    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
}

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <div className="">
                            <input autoFocus={true} onBlur={this.toggleEditMode.bind(this)} type="text" value={this.props.status}/>
                        </div>
                    </div>
                }
                <br/>
            </div>
        )
    }
}

export default ProfileStatus