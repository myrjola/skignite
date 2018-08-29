import { AnyAction, Reducer } from 'redux'
import { GET_TALKS_SUCCESS, GET_TALKS_FAIL } from './sagas'

export const initialState = { talks: [], error: {} }

export const reducer: Reducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_TALKS_SUCCESS:
            return { ...state, talks: action.talks, error: undefined }
        case GET_TALKS_FAIL:
            return { ...state, error: action.error }
        default:
            return state
    }
}
