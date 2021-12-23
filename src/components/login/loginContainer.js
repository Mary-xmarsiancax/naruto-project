import Login from "./login";
import {getCaptchaUrl, login} from "../redux/auth-reducer";
import {connect} from "react-redux";


const LoginContainer = (props) => {
    return (
        <Login {...props}/>
    )
}
let mapStateToProps = (state) => ({
    messages: state.auth.messages,
    captchaUrl: state.auth.captchaUrl,
})
export default connect(mapStateToProps, {login,getCaptchaUrl})(LoginContainer);