import actionTypes from './actionTypes'

const initialState = {
    authLogOut: false,
    authSignInData: [],
    firebaseval: {}
}


const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.GetUserInfo:
        //     return {
        //         ...state,
        //         authLogOut: !state.authLogOut,
        //     }
        case actionTypes.SiginUpadte: {
            return state = {
                ...state,
                authLogOut: !state.authLogOut,
                authSignInData: action.payload,
            }
        }

    }
    return state;
}
export default AuthReducer;