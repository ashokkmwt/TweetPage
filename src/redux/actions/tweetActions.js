import { ADD_TWEET, REMOVE_TWEET, UPDATE_TWEET, UPDATE_STATUS, ARCHIEVE_STATUS, OPTION_STATUS } from "./types"

const addTweetAction = (data) => {
    return (
        {
            type: ADD_TWEET,
            payload: data
        }
    )
}

const removeTweetAction = (data) => {
    return (
        {
            type: REMOVE_TWEET,
            payload: data
        }
    )
}

const updateTweetAction = (data) => {
    return (
        {
            type: UPDATE_TWEET,
            payload: data // id
        }
    )
}


const statusUpdateAction = (data) => {
    return (
        {
            type: UPDATE_STATUS,
            payload: data
        }
    )
}

const setArchieveAction = (data) => {
    return (
        {
            type: ARCHIEVE_STATUS,
            payload: data
        }
    )
}

const optionsAction = (data) => {
    return (
        {
            type: OPTION_STATUS,
            payload: data
        }
    )
}

export { addTweetAction, removeTweetAction, updateTweetAction, statusUpdateAction, setArchieveAction, optionsAction }