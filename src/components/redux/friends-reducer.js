let initialState = {
    friends: [
        {id: 1, friendsName: "Raf"},
        {id: 2, friendsName: "Donny"},
        {id: 3, friendsName: "Micky"},
        {id: 4, friendsName: "Leo"},
    ]
};
const friendsReduser = (state = initialState, action) => {
    return state;
};
export default friendsReduser;