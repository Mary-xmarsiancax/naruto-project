import React from 'react';
import Music from "./Music";
import {compose} from "redux";

const MusicContainer = (props) => {
    return (
        <Music/>
    )
    }
export default compose(
)(MusicContainer);