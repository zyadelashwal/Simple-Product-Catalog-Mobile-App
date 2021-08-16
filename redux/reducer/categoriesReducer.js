import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS, FETCHING_CATEGORIES } from '../actions/actionType';

const initialState = {
    Categories: [],
    isFetching: false,
    error: false
}

export default function CategoriesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_CATEGORIES:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_CATEGORIES_SUCCESS:
            console.log(action.data)
            return {
                ...state,
                isFetching: false,
                Categories: action.data
            }
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}
