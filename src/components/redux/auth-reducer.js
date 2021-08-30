import {authMeAPI} from "../../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";


export const setAuthUserData = (id, email, login) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}});


let initialState = {
        id: null,
        email: null,
        login: null,
        isFetching: false,
        isAuth: false
    }
;
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
};
export const authMe = () => {
    return (dispatch) => {
        authMeAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
}
export default authReducer;