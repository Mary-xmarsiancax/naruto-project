import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator} from "../../redux/messages-reducer";
import {addAnswerActionCreator} from "../../redux/answers-reducer";
import React from "react";
import withAuthRedirect from "../../common/hocRedirect/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        answers: state.answersPage.answers,
        dialogData: state.dialogsPage.dialogData,
        newMessageText: state.messagesPage.newMessageText,
        newAnswerText: state.answersPage.newAnswerText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (formData) => {
            dispatch(addMessageActionCreator(formData))
        },

        addAnswer: (formData) => {
            dispatch(addAnswerActionCreator(formData))
        },

    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);;