import axios from 'axios';

// action types
export const FETCH_DOGS_START = 'FETCH_DOGS_START';
export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';
export const FETCH_DOGS_FAILURE = 'FETCH_DOGS_FAILURE';

// action creators (async)
export const fetchDogs = () => {
    return (dispatch) => {
        // do async actions here
        dispatch({ type: FETCH_DOGS_START })

        // fetch data
        axios.get('http://shibe.online/api/shibes?count=10')
            .then(res => {
                console.log(res)
                dispatch({ type: FETCH_DOGS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                //console.log(err.message)
                dispatch({ type: FETCH_DOGS_FAILURE, payload: err.message })
            })
    }
}