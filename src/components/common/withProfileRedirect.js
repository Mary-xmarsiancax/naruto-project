import {Redirect} from "react-router-dom";
import React from "react";

export const withProfileRedirect = (userId) => {
    class RedirectToProfileComponent extends React.Component {
        render() {
             return <Redirect to={`profile/` + userId}/>
        }
    }

}
export default withProfileRedirect;