let initialState = {
    dialogData: [
        {id: 1, name: "Max Barochkin", ava: "maxAva"},
        {id: 2, name: "Serg", ava: "sergAva"},
        {id: 3, name: "Ann Sokolova", ava: "anyaAva"},
        {id: 4, name: "Nina Zachmatova", ava: "ninaAva"},
        {id: 5, name: "Fred Mercury", ava: "fredAva"},
    ],
};
const dialogsReduser = (state = initialState, action) => {
    return state;
};
export default dialogsReduser;