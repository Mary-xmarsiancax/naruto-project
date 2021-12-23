import {authMeAPI, securityAPI} from "../../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_MESSAGES_ERR = "SET_MESSAGES_ERR";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";


export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {id, email, login, isAuth}
});
export const setMessagesErr = (messages) => ({
    type: SET_MESSAGES_ERR,
    data: messages
});
export const setCaptchaUrl = (url) => ({type: SET_CAPTCHA_URL, url})


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    messages: [],
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case SET_MESSAGES_ERR:
            return {
                ...state,
                messages: action.data
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.url
            }

        default:
            return state;
    }
};

export const authMe = () => async (dispatch) => {
    let data = await authMeAPI.auth()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const getAuthUserData = () => async (dispatch) => {
    let data = await authMeAPI.auth()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (body) => (dispatch) => {
    const promise = new Promise((resolve, reject) => {
        authMeAPI.login(body)
            .then(response => {
                let messages = response.data.messages
                authMeAPI.auth()
                    .then(data => {
                        if (data.resultCode === 0) {
                            let {id, email, login} = data.data;
                            dispatch(setAuthUserData(id, email, login, true));
                            resolve(id);
                        } else {
                            dispatch (getCaptchaUrl())
                            dispatch(setMessagesErr(messages));
                        }
                    })
            });
    });
    return promise;
}
export const logout = () => async (dispatch) => {
    let data = await authMeAPI.logout()
    if (data.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    let data = await securityAPI.captchaUrl()
                let url = data.url
                dispatch(setCaptchaUrl(url));

        }


export default authReducer;