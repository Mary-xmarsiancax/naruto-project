import React from 'react';
import Music from "./Music";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

const MusicContainer = (props) => {
    return (
        <Music/>
    )
    }
export default compose(
    withAuthRedirect
)(MusicContainer);