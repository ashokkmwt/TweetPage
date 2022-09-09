import { ADD_TWEET, ARCHIEVE_STATUS, OPTION_STATUS, REMOVE_TWEET, UPDATE_STATUS, UPDATE_TWEET } from '../actions/types'

const initialState = [];
const tweetReducer = (state = initialState, action) => {
    let newState = [...state];

    switch (action.type) {
        case ADD_TWEET:
            return [...state, action.payload]

        case REMOVE_TWEET:
            newState = newState.filter(tweetObj => tweetObj.id !== action.payload)
            return newState;

        case UPDATE_TWEET:
            newState = newState.map((data) => {
                if (data.id === action.payload.id) {
                    const update = {
                        ...data,
                        mytweet: action.payload.newTweet,
                    }
                    return update
                }
                return data
            })
            return newState

        case UPDATE_STATUS:
            newState = newState.map((data) => {

                if (data.id === action.payload) {
                    const update = {
                        ...data,
                        status: !data.status
                    }
                    return update
                }
                return data
            })
            return newState

        case ARCHIEVE_STATUS:
            newState = newState.map((data) => {
                if (data.id === action.payload.id) {
                    return { ...data, isArchieve: !action.payload.isArchieve }
                }
                return data
            })
            return newState

        case OPTION_STATUS:
            newState = newState.map((data) => {
                if (data.id === action.payload) {
                    return { ...data, options: !data.options }
                }
                return data
            })
            return newState

        default:
            return state
    }
}

export default tweetReducer