import MyPosts from "./MyPosts";
import {connect} from "react-redux"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/posts-reducer";

const mapStateToProps = (state) => {
    return {
        newPostData: state.profilePage.newPostData,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost:()=> {
            dispatch(addPostActionCreator())
        },
        onPostChange:(text)=>{
            dispatch(updateNewPostTextActionCreator(text))
    }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;