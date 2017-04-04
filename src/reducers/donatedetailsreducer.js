import actionTypes from './actionTypes'

const initialState = {
    authLogOut: false,
    authSignInData: [],
    userinfo: [],
    donor: ["hello"],
    donors: ["hello"]
}


const donatedetailsreducer = (state = initialState, action) => {
    // console.log(action.donorinfo)
     console.log(action.allInfo)

    switch (action.type) {
        case actionTypes.AllDonorInfo:
            return state = {
                ...state,
                authLogOut: !state.authLogOut,
                donor: action.donorinfo,
            }
        case actionTypes.AllGetDonorInfo:
            return state = {
                ...state,
                authLogOut: !state.authLogOut,
                donors: action.allinfo,
            }
       default:{
    return state;}
    }
    
}
export default donatedetailsreducer;