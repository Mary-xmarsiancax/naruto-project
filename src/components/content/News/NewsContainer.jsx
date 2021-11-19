import React from 'react';
import News from "./News";
import {compose} from "redux";
import withAuthRedirect from "../../common/hocRedirect/withAuthRedirect";


const NewsContainer = (props) => {
    return (
        <News/>
    )
}
export default compose(
)(NewsContainer);