import { LIKE, UNLIKE } from '../actions/actionType';

const initialState = {
    like:false,
    count:0,
    error: false
}

export default function CategoriesReducer(state = initialState, action) {
    switch(action.type) {
        case LIKE:
            return {
                ...state,
                like: true,
                count:count+1
            }
        case UNLIKE:
            
            return {
                ...state,
                like: false,
                count:count-1
            }
       
        default:
            return state
    }
}
