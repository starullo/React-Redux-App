import axios from 'axios';

export const FETCH_FACTS_START = "FETCH_FACTS_START";
export const FETCH_FACTS_SUCCESS = "FETCH_FACTS_SUCCESS";
export const FETCH_FACTS_FAILURE = "FETCH_FACTS_FAILURE";
export const GET_RANDOM_FACT = "GET_RANDOM_FACT";
export const ADD_TO_SAVED = "ADD_TO_SAVED";


export const fetchFacts = () => (dispatch) => {
    dispatch({type: FETCH_FACTS_START});
    axios.get('https://cat-fact.herokuapp.com/facts')
    .then(res=>{
        console.log(res)
        dispatch({type: FETCH_FACTS_SUCCESS, payload: res.data.all});
    })
    .catch(err=>{
        dispatch({type: FETCH_FACTS_FAILURE, payload: err.message})
    })
}

export const getRandom = (cat) => dispatch => {
    dispatch({type: GET_RANDOM_FACT, payload: cat});
}

export const addToSaved = cat => dispatch => {
    dispatch({type: ADD_TO_SAVED, payload: cat})
}