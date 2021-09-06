import React from 'react';
import s from "./Profile.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode : true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode : false
        })
    }

    render() {
        return (<div>
                {this.state.editMode ?
                    <div ><input onBlur={this.deactivateEditMode} defaultValue={this.props.status} type="string"/></div>
                    : <div className={s.usersStatus} onDoubleClick={this.activateEditMode}>{this.props.status}</div>}
            </div>
        )
    }
}

export default ProfileStatus;