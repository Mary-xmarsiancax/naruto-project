import MyPosts from "./MyPosts";
import {connect} from "react-redux"
import {addPostActionCreator, deletePostActionCreator} from "../../../redux/posts-reducer";

const mapStateToProps = (state) => {
    return {
        newPostData: state.profilePage.newPostData,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost:(formData)=> {
            dispatch(addPostActionCreator(formData))
        },
        deletePost:(id)=>{
            dispatch(deletePostActionCreator(id))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;