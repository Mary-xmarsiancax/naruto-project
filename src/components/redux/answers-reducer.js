const ADD_ANSWER = "ADD-ANSWER";
export const addAnswerActionCreator = (formData) => ({type: ADD_ANSWER, formData:formData});


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
const answersReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANSWER: {
            return {
                ...state,
                answers: [...state.answers, {id:state.answers.length+1, answer: action.formData.answer}],
                newAnswerText: " "
            }
        }
        default:
            return state;
    }
};
export default answersReduser;