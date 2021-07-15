const ADD_ANSWER = "ADD-ANSWER";
export const addAnswerActionCreator = () => ({type: ADD_ANSWER});
const UPDATE_NEW_ANSWER_TEXT = "UPDATE-NEW-ANSWER-TEXT";
export const onAnswerChangeActionCreator = (text) => ({type: UPDATE_NEW_ANSWER_TEXT, newTextAnswer: text});

let initialState = {
    answers: [
        {id: 1, answer: "Hi!"},
        {id: 2, answer: "Ok!"},
        {id: 3, answer: "Ok!One minute"},
        {id: 5, answer: "Op!Op!op!!"},
        {id: 4, answer: "I am fine!I learn Programming!"},

    ],
    newAnswerText: " "
};
const answersReduser=(state = initialState,action)=>{
    switch (action.type) {
        case ADD_ANSWER:{
            let newAnswer = {id: 6, answer: state.newAnswerText};
            let stateCopy={...state}
            stateCopy.answers=[...stateCopy.answers];
            stateCopy.answers.push(newAnswer);
            stateCopy.newAnswerText = " ";
            return stateCopy;
        }
        case UPDATE_NEW_ANSWER_TEXT:{
            let stateCopy={...state}
            stateCopy.newAnswerText = action.newTextAnswer;
            return stateCopy;
        }
        default:return state;
    }
};
export default answersReduser;