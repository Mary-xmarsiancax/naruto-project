import Friends from "./Friends";
import {connect} from "react-redux";



// const FriendsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             return <Friends friends={store.getState().friendsPage.friends}/>
//         }
//     }
//     </StoreContext.Consumer>
// }
const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        isAuth:state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;