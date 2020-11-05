import { FETCH_DOGS_START, FETCH_DOGS_SUCCESS, FETCH_DOGS_FAILURE } from '../actions/index'

const initialState = {
    isLoading: false,
    dogsData: [],
    error: '',
}

export const dogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DOGS_START:
            return {
                ...state,
                isLoading: true,
                // error: '',
            }
        case FETCH_DOGS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dogsData: action.payload,
                // error: '',
            }
        case FETCH_DOGS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }    
        default:
            return state
    }
}