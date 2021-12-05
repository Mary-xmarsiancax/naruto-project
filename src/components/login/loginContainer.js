import Login from "./login";
import {login} from "../redux/auth-reducer";
import {connect} from "react-redux";


const LoginContainer = (props) => {
    return (
        <Login {...props}/>
    )
}
let mapStateToProps = (state) => ({
    messages: state.auth.messages
})
export default connect(mapStateToProps, {login})(LoginContainer);