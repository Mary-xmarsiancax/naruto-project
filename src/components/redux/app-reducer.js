import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


let initialState = {
        initialized: false
    }
;
const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default AppReducer;