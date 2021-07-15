import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../redux/messages-reducer";
import {addAnswerActionCreator, onAnswerChangeActionCreator} from "../redux/answers-reducer";


// const DialogsContainer = () => {
//
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             let addMessage = () => {
//                 store.dispatch(addMessageActionCreator());
//             }
//
//
//             let onMessageChange = (text) => {
//                 store.dispatch(onMessageChangeActionCreator(text));
//             }
//
//
//             let addAnswer = () => {
//                 store.dispatch(addAnswerActionCreator());
//             }
//
//
//             let onAnswerChange = (text) => {
//                 store.dispatch(onAnswerChangeActionCreator(text));
//             }
//             return <Dialogs messages={store.getState().messagesPage.messages}
//                             answers={store.getState().answersPage.answers}
//                             dialogData={store.getState().dialogsPage.dialogData}
//                             newMessageText={store.getState().messagesPage.newMessageText}
//                             newAnswerText={store.getState().answersPage.newAnswerText}
//                             addMessage={addMessage} onMessageChange={onMessageChange}
//                             addAnswer={addAnswer} onAnswerChange={onAnswerChange}
//             />
//         }
//     }
//
//     </StoreContext.Consumer>
//
// }
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