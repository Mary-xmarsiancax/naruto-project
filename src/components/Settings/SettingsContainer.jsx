import React from 'react';
import s from "./Settings.module.css";
import Settings from "./Settings";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

const SettingsContainer = (props) => {
    return (
       <Settings/>
    )
}
export default compose(
    withAuthRedirect
)(SettingsContainer);