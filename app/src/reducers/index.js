import {FETCH_FACTS_START, FETCH_FACTS_SUCCESS, FETCH_FACTS_FAILURE, GET_RANDOM_FACT, ADD_TO_SAVED} from '../actions';

const initialState = {
    facts: [],
    isLoading: false,
    error: '',
    randomFact: null,
    saved: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FACTS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_FACTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                facts: action.payload
            };
        case FETCH_FACTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case GET_RANDOM_FACT:
            return {
                ...state,
                randomFact: action.payload,
            };
        case ADD_TO_SAVED:
            return {
                ...state,
                saved: [...state.saved, action.payload]
            }
        default:
            return state;
    }
}