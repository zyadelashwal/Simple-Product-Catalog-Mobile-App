import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS, FETCHING_PRODUCTS } from '../actions/actionType';

const initialState = {
    Products: [],
    isFetching: false,
    error: false
}

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_PRODUCTS:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            console.log(action.data)
            return {
                ...state,
                isFetching: false,
                Products: action.data
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}
