import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../redux/messages-reducer";
import {addAnswerActionCreator, onAnswerChangeActionCreator} from "../redux/answers-reducer";



const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        answers: state.answersPage.answers,
        dialogData: state.dialogsPage.dialogData,
        newMessageText: state.messagesPage.newMessageText,
        newAnswerText: state.answersPage.newAnswerText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        },
        addAnswer: () => {
            dispatch(addAnswerActionCreator())
        },
        onAnswerChange: (text) => {
            dispatch(onAnswerChangeActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;