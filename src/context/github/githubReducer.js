import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS,
    INVALID_QUERY
} from '../types';

// Reducer Function
export default (state, action) => {
    // Parse a function for whenever the type/data changes 
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }

        case INVALID_QUERY:
            return {
                ...state,
                usersLength: action.payload,
            }

        case GET_USERS:
            return {
                ...state,
                user: action.payload,
                loading: false,
            }

        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false,
            }

        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false,
            }

        case SET_LOADING:
            return {
                // copy/pass down whatever is in the state (props)
                ...state,
                loading: true
            }

        default:
            break;
    }
}