import {authMeAPI} from "../../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";


export const setAuthUserData = (id, email, login,isAuth) => ({type: SET_AUTH_USER_DATA, data: {id, email, login,isAuth}});


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
                ...action.data
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
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
    }
}

export const getAuthUserData = () => (dispatch) => {
        return authMeAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
    }

export const login = (body) => {
    return (dispatch) => {
        authMeAPI.login(body)
            .then(response => {
                authMeAPI.auth()
                    .then(data => {
                        if (data.resultCode === 0) {
                            let {id, email, login} = data.data;
                            dispatch(setAuthUserData(id, email, login, true));
                        }
                    })
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        authMeAPI.logout()
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}
export default authReducer;