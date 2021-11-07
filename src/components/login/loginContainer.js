import Login from "./login";
import {authMe, login} from "../redux/auth-reducer";
import {connect} from "react-redux";

const LoginContainer = (props) => {
    return (
        <Login login={props.login}/>
    )
}
export default connect(null, {login})(LoginContainer);